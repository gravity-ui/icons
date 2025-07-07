import baseConfig from '@gravity-ui/eslint-config';
import importOrderConfig from '@gravity-ui/eslint-config/import-order';
import prettierConfig from '@gravity-ui/eslint-config/prettier';
import {defineConfig} from 'eslint/config';
import storybookPlugin from 'eslint-plugin-storybook';
import globals from 'globals';

export default defineConfig([
    ...baseConfig,
    ...prettierConfig,
    ...importOrderConfig,
    ...storybookPlugin.configs['flat/recommended'],
    {
        rules: {
            'import/no-extraneous-dependencies': 'off',
            'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
            complexity: 'off',
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            '@typescript-eslint/prefer-ts-expect-error': 'error',
            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                    fixStyle: 'separate-type-imports',
                },
            ],
        },
    },
    {
        files: ['**/*.js', '**/*.mjs'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    {
        ignores: ['storybook-static', 'esm', './*.js', './*.d.ts'],
    },
]);
