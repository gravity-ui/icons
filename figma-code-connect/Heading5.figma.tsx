import figma from '@figma/code-connect';

import {Heading5} from '../lib';

figma.connect(
    Heading5,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1184',
    {
        example: () => <Heading5 />,
    },
);
