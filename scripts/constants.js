import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export const SVGS_DIR = path.resolve(__dirname, '..', 'svgs');
export const ICONS_DIR = path.resolve(__dirname, '..', 'lib');

export const ICON_NAME_REGEXP = /^([a-z0-9]|[a-z0-9](-?[a-z0-9])*-?[a-z0-9])$/;
