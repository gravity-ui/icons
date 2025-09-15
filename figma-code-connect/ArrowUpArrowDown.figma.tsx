import figma from '@figma/code-connect';

import {ArrowUpArrowDown} from '../lib';

figma.connect(
    ArrowUpArrowDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4595%3A253',
    {
        example: () => <ArrowUpArrowDown />,
    },
);
