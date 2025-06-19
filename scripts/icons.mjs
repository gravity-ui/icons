import path from 'path';
import fs from 'fs/promises';
import {transform} from '@svgr/core';

import {ICONS_DIR, SVGS_DIR} from './constants.mjs';
import {cleanDir, getComponentName, prettify} from './utils.mjs';

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

    const files = (await fs.readdir(SVGS_DIR))
        .map((file) => path.join(SVGS_DIR, file))
        .sort((fileA, fileB) => (path.parse(fileA).name > path.parse(fileB).name ? 1 : -1));
    const iconFiles = await Promise.all(
        files.map(async (file) => {
            const id = path.parse(file).name;
            const name = getComponentName(id);
            const code = await fs.readFile(file, 'utf8');
            const iconFile = path.join(ICONS_DIR, `${name}.tsx`);
            const content = await transform(
                code,
                {typescript: true, ref: true, plugins: ['@svgr/plugin-jsx']},
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
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
});
