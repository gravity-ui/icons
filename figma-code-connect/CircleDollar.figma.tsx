import figma from '@figma/code-connect';

import {CircleDollar} from '../lib';

figma.connect(
    CircleDollar,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A620',
    {
        example: () => <CircleDollar />,
    },
);
