import figma from '@figma/code-connect';

import {HandPointDown} from '../lib';

figma.connect(
    HandPointDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4615%3A356',
    {
        example: () => <HandPointDown />,
    },
);
