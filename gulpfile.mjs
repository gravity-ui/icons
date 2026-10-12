/* eslint-env node */
import path from 'path';
import {PassThrough} from 'stream';

import {addVirtualFile, createTypescriptProject} from '@gravity-ui/gulp-utils';
import fg from 'fast-glob';
import {dest, parallel, series, src, task} from 'gulp';
import {rimraf} from 'rimraf';

import pkg from './package.json' with {type: 'json'};

async function compileTs(esm = false) {
    const tsProject = await createTypescriptProject({
        compilerOptions: {
            declaration: !esm,
            module: esm ? 'esnext' : 'nodenext',
            moduleResolution: esm ? 'bundler' : 'nodenext',
            ...(esm ? undefined : {verbatimModuleSyntax: false}),
        },
    });

    return new Promise((resolve) => {
        src('lib/*.{ts,tsx}')
            .pipe(
                tsProject({
                    customTransformers: {
                        after: [tsProject.customTransformers.transformLocalModules],
                    },
                }),
            )
            .pipe(
                esm
                    ? addVirtualFile({
                          fileName: 'package.json',
                          text: JSON.stringify({version: pkg.version, type: 'module'}),
                      })
                    : new PassThrough({objectMode: true}),
            )
            .pipe(dest(esm ? path.resolve('esm') : path.resolve('.')))
            .on('end', resolve);
    });
}

task('clean', async () => {
    const paths = await fg(['esm', '*.d.ts', '*.js', '!.*.js', '!*.config.js'], {
        onlyFiles: false,
    });

    return Promise.all(paths.map((path) => rimraf(path)));
});

task('compile-to-esm', () => compileTs(true));

task('compile-to-cjs', () => compileTs());

task('build', series(['clean', parallel(['compile-to-esm', 'compile-to-cjs'])]));

task('default', series(['build']));
