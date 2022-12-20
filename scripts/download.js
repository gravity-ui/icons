const path = require('path');
const fs = require('fs/promises');
const figmaExport = require('@figma-export/core');
const svgo = require('svgo');
const {SVGS_DIR, ICON_NAME_REGEXP} = require('./constants');
const {cleanDir, getComponentName} = require('./utils');

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE = process.env.FIGMA_FILE;
const FIGMA_PAGE = process.env.FIGMA_PAGE;

function parsePropertiesString(str) {
    return str.split(/\s*,\s*/).reduce((acc, prop) => {
        const [name, value] = prop.split('=');
        acc[name] = value;
        return acc;
    }, {});
}

function svgoTransformer(svgString) {
    return svgo.optimize(svgString, {
        multipass: true,
        plugins: [
            {
                name: 'preset-default',
                params: {overrides: {convertColors: {currentColor: true}, removeViewBox: false}},
            },
        ],
    }).data;
}

function createSvgBuilder(metadata) {
    return async function svgBuilder([{children, components: icons}]) {
        const iconSets = children.filter(({type}) => type === 'COMPONENT_SET');
        const iconsById = icons.reduce((acc, item) => ({...acc, [item.id]: item}), {});

        for (const iconSet of iconSets) {
            if (!ICON_NAME_REGEXP.test(iconSet.name)) {
                throw new Error(`Icon has incorrect name: ${iconSet.name}`);
            }

            for (const icon of iconSet.children) {
                const {style, keywords = ''} = parsePropertiesString(icon.name);
                const svg = iconsById[icon.id].svg;
                let name = iconSet.name;

                if (!style) {
                    throw new Error(`Icon has no style: ${iconSet.name}`);
                }

                if (style !== 'regular') {
                    name += `-${style}`;
                }

                metadata.icons.push({
                    name: iconSet.name,
                    style,
                    svgName: name,
                    componentName: getComponentName(name),
                    keywords: keywords.split(' '),
                });
                await fs.writeFile(path.join(SVGS_DIR, `${name}.svg`), svg);
            }
        }
    };
}

async function run() {
    await cleanDir(SVGS_DIR);

    const metadata = {
        icons: [],
    };

    await figmaExport.components({
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
