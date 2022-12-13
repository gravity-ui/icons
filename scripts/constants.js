const path = require('path');

const SVGS_DIR = path.resolve(__dirname, '..', 'svgs');
const ICONS_DIR = path.resolve(__dirname, '..', 'lib');

const ICON_NAME_REGEXP = /^([a-z0-9]|[a-z0-9](-?[a-z0-9])*-?[a-z0-9])$/;

module.exports = {
    SVGS_DIR,
    ICONS_DIR,
    ICON_NAME_REGEXP,
};
