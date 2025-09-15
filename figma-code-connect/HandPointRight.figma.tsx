import figma from '@figma/code-connect';

import {HandPointRight} from '../lib';

figma.connect(
    HandPointRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4615%3A354',
    {
        example: () => <HandPointRight />,
    },
);
