import fs from 'fs/promises';

import prettier from 'prettier';
import {optimize} from 'svgo';

export function optimizeSvg(svgString) {
    return optimize(svgString, {
        multipass: true,
        plugins: [
            {
                name: 'preset-default',
                params: {
                    overrides: {
                        convertColors: {currentColor: /#(?!f33|ff3333)/i},
                    },
                },
            },
            'removeTitle',
        ],
    }).data;
}

export async function cleanDir(dir) {
    await fs.rm(dir, {recursive: true, force: true});
    await fs.mkdir(dir, {recursive: true});
}

export async function prettify(content, filepath) {
    const prettierConfig = (await prettier.resolveConfig(filepath)) ?? {};
    return prettier.format(content, {...prettierConfig, filepath});
}

export function getComponentName(id) {
    return id.replace(/^\w|-\w/g, (match) => match.replace('-', '').toUpperCase());
}
