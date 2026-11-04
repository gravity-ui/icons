/* eslint-disable new-cap */
// PathKit names its factory functions in PascalCase.
import fs from 'fs/promises';
import {createRequire} from 'module';

import PathKitInit from 'pathkit-wasm/bin/pathkit.js';
import {optimize} from 'svgo';

import {optimizeSvg} from './utils.mjs';

const require = createRequire(import.meta.url);

// Icon components take their stroke width from this CSS variable, in viewBox
// units. Without it they keep the width icons are drawn with.
const STROKE_WIDTH_VARIABLE = '--g-icon-stroke-width';
const REGULAR_STROKE_WIDTH = 1.5;
// Thinnest supported stroke. Icon outlines are shrunk to it, and a stroke on
// top grows them to the width set by the variable.
const MIN_STROKE_WIDTH = 1;
// Icons losing details at MIN_STROKE_WIDTH. They keep their outline and only
// get bolder.
const KEEP_OUTLINE_ICONS = new Set([
    'card-club',
    'flame',
    'logo-docker',
    'logo-rustore',
    'logo-yandex-messenger',
    'paper-plane',
    'pin-slash',
]);

// Skia's stroker approximates curves with a tolerance in path units, which is too
// coarse for a 16x16 icon, so outlines are shrunk at a larger scale. At this scale
// a shrunk circle deviates by less than 0.002 units.
const SCALE = 16;
// Shrinking leaves slivers at sharp corners. Anything thinner than twice this
// size is removed.
const SLIVER_SIZE = 0.05;

// Icons are drawn with round joins and caps, so shrinking the outline of an
// icon by half of the stroke width difference is the same as stroking its
// centerline with a thinner stroke.
function createOutliner(PathKit) {
    function parse(d, fillRule) {
        const shape = PathKit.FromSVGString(d);
        shape.setFillType(
            fillRule === 'evenodd' ? PathKit.FillType.EVENODD : PathKit.FillType.WINDING,
        );
        // Resolves overlaps and closes every contour, so that only the visible
        // outline gets a stroke.
        return shape.simplify();
    }

    // Shrinks a bit further and grows back to remove slivers, as well as crumbs
    // left in some icons by Figma. Growing back with miter joins keeps sharp
    // corners sharp.
    function shrink(shape, amount) {
        const shrunk = offset(shape, -(amount + SLIVER_SIZE), PathKit.StrokeJoin.ROUND);
        const result = offset(shrunk, SLIVER_SIZE, PathKit.StrokeJoin.MITER);
        shrunk.delete();

        return result;
    }

    function offset(shape, delta, join) {
        const scaled = shape.copy().transform(SCALE, 0, 0, 0, SCALE, 0, 0, 0, 1);
        const stroke = scaled.copy().stroke({width: 2 * Math.abs(delta) * SCALE, join});
        const result = PathKit.MakeFromOp(
            scaled,
            stroke,
            delta > 0 ? PathKit.PathOp.UNION : PathKit.PathOp.DIFFERENCE,
        );
        scaled.delete();
        stroke.delete();

        if (!result) {
            throw new Error('Skia failed to offset a path');
        }

        return result.transform(1 / SCALE, 0, 0, 0, 1 / SCALE, 0, 0, 0, 1);
    }

    // Skia writes conics (circular arcs) as chains of quads, which svgo cannot
    // turn back into arcs. Cubics it can, so all curves are written as cubics.
    function toSVGString(shape) {
        let d = '';
        let [x0, y0] = [0, 0];

        for (const [verb, ...args] of shape.toCmds()) {
            if (verb === PathKit.MOVE_VERB || verb === PathKit.LINE_VERB) {
                d += `${verb === PathKit.MOVE_VERB ? 'M' : 'L'}${args.join(' ')}`;
                [x0, y0] = args;
            } else if (verb === PathKit.QUAD_VERB || verb === PathKit.CONIC_VERB) {
                // A quad is a conic with weight 1. For a circular arc the weight is
                // cos(angle / 2), and this gives the common cubic approximation.
                const [cx, cy, x, y, weight = 1] = args;
                const k = (4 * weight) / (3 * (1 + weight));
                d += `C${x0 + k * (cx - x0)} ${y0 + k * (cy - y0)} ${x + k * (cx - x)} ${y + k * (cy - y)} ${x} ${y}`;
                [x0, y0] = [x, y];
            } else if (verb === PathKit.CUBIC_VERB) {
                d += `C${args.join(' ')}`;
                [x0, y0] = args.slice(4);
            } else if (verb === PathKit.CLOSE_VERB) {
                d += 'Z';
            }
        }

        return d;
    }

    return {parse, shrink, toSVGString};
}

// Visible paths of an icon along with their inherited presentation attributes.
// Paths in <defs> (e.g. Figma's frame clip) are not part of the drawing.
function collectPaths(node, inherited = {}, result = []) {
    for (const child of node.children) {
        if (child.type !== 'element' || child.name === 'defs') {
            continue;
        }

        const style = {
            fill: child.attributes.fill ?? inherited.fill,
            fillRule: child.attributes['fill-rule'] ?? inherited.fillRule,
        };

        if (child.name === 'path') {
            result.push({node: child, ...style});
        }

        collectPaths(child, style, result);
    }

    return result;
}

// Accent paths (e.g. a red notification dot) are not strokes and stay as they are.
function createStrokeWidthPlugin(outliner, outlineWidth) {
    return {
        name: 'addStrokeWidth',
        fn: (root) => {
            for (const {node, fill, fillRule} of collectPaths(root)) {
                if (fill !== 'currentColor') {
                    continue;
                }

                const shape = outliner.parse(node.attributes.d, fillRule);
                const outline = outliner.shrink(shape, (REGULAR_STROKE_WIDTH - outlineWidth) / 2);

                // A stroke follows every contour, so the outline is written with
                // closed contours, which svgo keeps closed for stroked paths. The
                // stroke-width attribute is a fallback for renderers without CSS
                // variables.
                Object.assign(node.attributes, {
                    'fill-rule': 'evenodd',
                    d: outliner.toSVGString(outline),
                    stroke: 'currentColor',
                    'stroke-linejoin': 'round',
                    'stroke-width': String(REGULAR_STROKE_WIDTH - outlineWidth),
                    style: `stroke-width:max(0px,calc((var(${STROKE_WIDTH_VARIABLE},${REGULAR_STROKE_WIDTH}) - ${outlineWidth})*1px))`,
                });
                shape.delete();
                outline.delete();
            }

            return null;
        },
    };
}

// Returns a function that makes a regular icon take its stroke width from
// STROKE_WIDTH_VARIABLE.
export async function createStrokeWidthTransformer() {
    const PathKit = await PathKitInit({
        wasmBinary: await fs.readFile(require.resolve('pathkit-wasm/bin/pathkit.wasm')),
    });
    const outliner = createOutliner(PathKit);

    return function transform(svgName, svg) {
        const outlineWidth = KEEP_OUTLINE_ICONS.has(svgName)
            ? REGULAR_STROKE_WIDTH
            : MIN_STROKE_WIDTH;
        const {data} = optimize(svg, {
            plugins: [createStrokeWidthPlugin(outliner, outlineWidth)],
        });

        return optimizeSvg(data);
    };
}
