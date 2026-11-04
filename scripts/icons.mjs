import fs from 'fs/promises';
import path from 'path';
import url from 'url';

import {transform} from '@svgr/core';

import {ICONS_DIR, SVGS_DIR} from './constants.mjs';
import {createStrokeWidthTransformer} from './stroke-width.mjs';
import {cleanDir, getComponentName, prettify} from './utils.mjs';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

async function createIndexFile(files) {
    const indexFile = path.join(ICONS_DIR, 'index.ts');
    const content = files
        .map((file) => {
            const name = path.parse(file).name;

            return `export {default as ${name}} from './${name}'`;
        })
        .join('\n');
    const prettyContent = await prettify(content, indexFile);
    await fs.writeFile(indexFile, prettyContent);
}

async function run() {
    await cleanDir(ICONS_DIR);

    const metadata = JSON.parse(
        await fs.readFile(path.resolve(__dirname, '..', 'metadata.json'), 'utf8'),
    );
    const regularIcons = new Set(
        metadata.icons.filter(({style}) => style === 'regular').map(({svgName}) => svgName),
    );
    const transformStrokeWidth = await createStrokeWidthTransformer();
    const files = (await fs.readdir(SVGS_DIR))
        .map((file) => path.join(SVGS_DIR, file))
        .sort((fileA, fileB) => (path.parse(fileA).name > path.parse(fileB).name ? 1 : -1));
    const iconFiles = await Promise.all(
        files.map(async (file) => {
            const id = path.parse(file).name;
            const name = getComponentName(id);
            const svg = await fs.readFile(file, 'utf8');
            const code = regularIcons.has(id) ? transformStrokeWidth(id, svg) : svg;
            const iconFile = path.join(ICONS_DIR, `${name}.tsx`);
            const content = await transform(
                code,
                {typescript: true, plugins: ['@svgr/plugin-jsx']},
                {componentName: name},
            );
            const prettyContent = await prettify(content, iconFile);

            await fs.writeFile(iconFile, prettyContent);

            return iconFile;
        }),
    );
    await createIndexFile(iconFiles);
}

run().catch((error) => {
    console.error(error);
    process.exit(1);
});
