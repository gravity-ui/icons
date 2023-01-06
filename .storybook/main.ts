import type {StorybookConfig} from '@storybook/core-common';

const config: StorybookConfig = {
    stories: ['./**/*.stories.@(ts|tsx)'],
    addons: [
        {name: '@storybook/preset-scss', options: {rule: {sideEffects: true}}},
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
                viewport: false,
                measure: false,
                outline: false,
                docs: false,
            },
        },
    ],
};

module.exports = config;
