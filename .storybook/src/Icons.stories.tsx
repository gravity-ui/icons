import React from 'react';

import type {Meta, StoryObj} from '@storybook/react-webpack5';

import {Showcase} from './Showcase/Showcase';
import {WeightsShowcase} from './WeightsShowcase/WeightsShowcase';

export default {
    title: 'Icons',
    id: 'icons',
} as Meta;

export const Icons: StoryObj = {
    render: () => <Showcase />,
};

export const Weights: StoryObj = {
    render: () => <WeightsShowcase />,
};
