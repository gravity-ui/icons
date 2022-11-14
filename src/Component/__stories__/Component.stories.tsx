import React from 'react';
import {Meta, Story} from '@storybook/react';
import {Component, ComponentProps} from '..';

export default {
    title: 'Component',
    component: Component,
} as Meta;

export const Playground: Story<ComponentProps> = (args) => <Component {...args} />;
Playground.storyName = 'Component';
