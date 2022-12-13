const fs = require('fs/promises');
const prettier = require('prettier');

async function cleanDir(dir) {
    await fs.rm(dir, {recursive: true, force: true});
    await fs.mkdir(dir, {recursive: true});
}

async function prettify(content, filepath) {
    const prettierConfig = (await prettier.resolveConfig(filepath)) ?? {};
    return prettier.format(content, {...prettierConfig, filepath});
}

function getComponentName(id) {
    return id.replace(/^\w|-\w/g, (match) => match.replace('-', '').toUpperCase());
}

module.exports = {
    cleanDir,
    prettify,
    getComponentName,
};
