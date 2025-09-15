import figma from '@figma/code-connect';

import {LayoutRows3} from '../lib';

figma.connect(
    LayoutRows3,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4656%3A194',
    {
        example: () => <LayoutRows3 />,
    },
);
