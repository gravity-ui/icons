// eslint-disable-next-line import/order
import '@gravity-ui/uikit/styles/fonts.css';
// eslint-disable-next-line import/order
import '@gravity-ui/uikit/styles/styles.css';

import React from 'react';
import type {Decorator, Preview} from '@storybook/react';
import {ThemeProvider} from '@gravity-ui/uikit';

const withThemeProvider: Decorator = (Story, context) => {
    return (
        <ThemeProvider theme="light">
            <Story {...context} />
        </ThemeProvider>
    );
};

const preview: Preview = {
    decorators: [withThemeProvider],
};

export default preview;
