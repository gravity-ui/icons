import figma from '@figma/code-connect';

import {Moon} from '../lib';

figma.connect(
    Moon,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1056',
    {
        example: () => <Moon />,
    },
);
