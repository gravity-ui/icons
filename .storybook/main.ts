import type {StorybookConfig} from '@storybook/react-webpack5';
import type {RuleSetRule} from 'webpack';

const isStyleRule = (rule: RuleSetRule) =>
    rule.test instanceof RegExp &&
    (rule.test.test('test.css') || rule.test.test('test.scss') || rule.test.test('test.less'));

const storybookConfig: StorybookConfig = {
    framework: '@storybook/react-webpack5',
    stories: ['./src/**/*.stories.@(ts|tsx)'],
    addons: ['@storybook/addon-webpack5-compiler-swc', '@storybook/addon-a11y'],
    features: {
        actions: false,
        backgrounds: false,
        controls: false,
        measure: false,
        outline: false,
        viewport: false,
        interactions: false,
    },
    webpackFinal: async (webpackConfig) => {
        const rules = ((webpackConfig.module?.rules ?? []) as RuleSetRule[]).filter(
            (rule) => !isStyleRule(rule),
        );
        rules.push({
            test: /\.(css|scss)$/i,
            sideEffects: true,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        });
        return {
            ...webpackConfig,
            module: {...webpackConfig.module, rules},
            // Disable sideEffects optimization: webpack 5.108+ "lazy barrel"
            // defers import './Component.css' in sideEffects-free packages
            // (e.g. @gravity-ui/uikit) indefinitely, so component CSS never loads.
            optimization: {...webpackConfig.optimization, sideEffects: false},
        };
    },
};

export default storybookConfig;
