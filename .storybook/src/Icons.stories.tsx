import React from 'react';

import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {Showcase} from './Showcase/Showcase';

export default {
    title: 'Icons',
    id: 'icons',
} as Meta;

export const Icons: StoryObj = {
    render: () => <Showcase />,
};
