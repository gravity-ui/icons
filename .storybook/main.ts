import type {StorybookConfig} from '@storybook/react-webpack5';

const config: StorybookConfig = {
    framework: {
        name: '@storybook/react-webpack5',
        options: {fastRefresh: true},
    },
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

export default config;
