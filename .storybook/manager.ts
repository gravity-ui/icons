import {addons} from '@storybook/manager-api';
import {create} from '@storybook/theming';
import packageJson from '../package.json';

addons.setConfig({
    theme: create({
        base: 'light',

        colorPrimary: '#027bf3',
        colorSecondary: '#79b1f9',

        // Typography
        fontBase: '"Helvetica Neue", Arial, Helvetica, sans-serif',
        fontCode:
            '"SF Mono", "Menlo", "Monaco", "Consolas", "Ubuntu Mono", "Liberation Mono", "DejaVu Sans Mono", "Courier New", "Courier", monospace',

        // Text colors
        textColor: 'black',
        textInverseColor: 'black',

        // Toolbar default and active colors
        barTextColor: 'silver',
        barSelectedColor: '#027bf3',
        // barBg: '#027bf3',

        // Form colors
        inputBg: 'white',
        inputBorder: 'silver',
        inputTextColor: 'black',
        inputBorderRadius: 4,

        brandTitle: `<div style="font-size: 18px; color: #027bf3; font-weight: 600; margin-top: -6px; margin-bottom: 2px;">Gravity UI</div>
                <div style="font-size: 14px;color: #7d7d7d;font-weight: 400; white-space: nowrap">Icons v${packageJson.version}</div>`,
        brandUrl: 'https://gravity-ui.com',
    }),
});
