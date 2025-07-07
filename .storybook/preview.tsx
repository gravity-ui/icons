// eslint-disable-next-line import/order
import '@gravity-ui/uikit/styles/fonts.css';
// eslint-disable-next-line import/order
import '@gravity-ui/uikit/styles/styles.css';

import React from 'react';

import {ThemeProvider} from '@gravity-ui/uikit';
import type {Decorator, Preview} from '@storybook/react-webpack5';
import {MINIMAL_VIEWPORTS} from 'storybook/viewport';

const withThemeProvider: Decorator = (Story, context) => {
    return (
        <ThemeProvider theme="light">
            <Story {...context} />
        </ThemeProvider>
    );
};

const preview: Preview = {
    decorators: [withThemeProvider],
    parameters: {
        actions: {disable: true},
        backgrounds: {disable: true},
        controls: {disable: true},
        viewport: {
            viewports: MINIMAL_VIEWPORTS,
        },
    },
};

export default preview;
