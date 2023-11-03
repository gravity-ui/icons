import type {StorybookConfig} from '@storybook/react-webpack5';

const config: StorybookConfig = {
    framework: {
        name: '@storybook/react-webpack5',
        options: {fastRefresh: true},
    },
    stories: ['./**/*.stories.@(ts|tsx)'],
    addons: [{name: '@storybook/preset-scss', options: {rule: {sideEffects: true}}}],
};

export default config;
