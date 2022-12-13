import '@gravity-ui/uikit/styles/styles.css';

import React from 'react';
import type {DecoratorFn} from '@storybook/react';
import {ThemeProvider} from '@gravity-ui/uikit';

const withThemeProvider: DecoratorFn = (Story, context) => {
    return (
        <ThemeProvider theme={context.globals.theme}>
            <Story {...context} />
        </ThemeProvider>
    );
};

export const decorators = [withThemeProvider];

export const globalTypes = {
    theme: {
        name: 'Theme',
        defaultValue: 'light',
        toolbar: {
            icon: 'mirror',
            items: [
                {value: 'light', right: '☼', title: 'Light'},
                {value: 'dark', right: '☾', title: 'Dark'},
            ],
        },
    },
};
