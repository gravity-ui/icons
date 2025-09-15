import figma from '@figma/code-connect';

import {CurlyBracketsFunction} from '../lib';

figma.connect(
    CurlyBracketsFunction,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A897',
    {
        example: () => <CurlyBracketsFunction />,
    },
);
