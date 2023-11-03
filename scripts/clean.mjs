import fg from 'fast-glob';
import {rimraf} from 'rimraf';

async function run() {
    const paths = await fg(['esm', '*.d.ts', '*.js', '!.*.js', '!*.config.js'], {
        onlyFiles: false,
    });
    for (const path of paths) {
        rimraf.sync(path);
    }
}

run().catch((error) => {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
});
