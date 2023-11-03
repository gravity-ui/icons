import path from 'path';
import url from 'url';
import fs from 'fs/promises';
import {components as loadComponents} from '@figma-export/core';
import {optimize} from 'svgo';
import {ICON_NAME_REGEXP, SVGS_DIR} from './constants.mjs';
import {cleanDir, getComponentName} from './utils.mjs';
import {aliases} from './aliases.mjs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE = process.env.FIGMA_FILE;
const FIGMA_PAGE = process.env.FIGMA_PAGE;

const EMPTY_KEYWORDS_STRING = '-';

function parsePropertiesString(str) {
    return str.split(/\s*,\s*/).reduce((acc, prop) => {
        const [name, value] = prop.split('=');
        acc[name] = value;
        return acc;
    }, {});
}

function svgoTransformer(svgString) {
    return optimize(svgString, {
        multipass: true,
        plugins: [
            {
                name: 'preset-default',
                params: {
                    overrides: {
                        convertColors: {currentColor: /#(?!f33|ff3333)/i},
                        removeViewBox: false,
                    },
                },
            },
        ],
    }).data;
}

function createSvgBuilder(metadata) {
    return async function svgBuilder([{children, components: icons}]) {
        const iconSets = children.filter(({type}) => type === 'COMPONENT_SET');
        const iconsById = icons.reduce((acc, item) => ({...acc, [item.id]: item}), {});
        const uniqueIcons = new Set();

        iconSets.sort((a, b) => (a.name > b.name ? 1 : -1));

        for (const iconSet of iconSets) {
            if (!ICON_NAME_REGEXP.test(iconSet.name)) {
                throw new Error(`Icon has incorrect name: ${iconSet.name}`);
            }

            if (uniqueIcons.has(iconSet.name)) {
                throw new Error(`Icon has been already added: ${iconSet.name}`);
            } else {
                uniqueIcons.add(iconSet.name);
            }

            for (const icon of iconSet.children) {
                const props = parsePropertiesString(icon.name);
                const svg = iconsById[icon.id].svg;
                const name = iconSet.name;
                let svgName = name;
                let keywords = [];

                if (!props.style) {
                    throw new Error(`Icon has no style: ${name}`);
                }

                if (props.style !== 'regular') {
                    svgName += `-${props.style}`;
                }

                if (props.keywords && props.keywords !== EMPTY_KEYWORDS_STRING) {
                    keywords = props.keywords.split(' ');
                }

                metadata.icons.push({
                    name,
                    style: props.style,
                    svgName,
                    componentName: getComponentName(svgName),
                    keywords,
                });
                await fs.writeFile(path.join(SVGS_DIR, `${svgName}.svg`), svg);
            }

            if (aliases[iconSet.name]) {
                iconSets.push({...iconSet, name: aliases[iconSet.name]});
            }
        }
    };
}

async function run() {
    await cleanDir(SVGS_DIR);

    const metadata = {
        icons: [],
    };

    await loadComponents({
        token: FIGMA_TOKEN,
        fileId: FIGMA_FILE,
        onlyFromPages: [FIGMA_PAGE],
        transformers: [svgoTransformer],
        outputters: [createSvgBuilder(metadata)],
    });
    await fs.writeFile(
        path.resolve(__dirname, '..', 'metadata.json'),
        JSON.stringify(metadata, null, 2),
    );
}

run().catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
});
