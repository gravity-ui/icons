import figma from '@figma/code-connect';

import {ChevronsRight} from '../lib';

figma.connect(
    ChevronsRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2977%3A85824',
    {
        example: () => <ChevronsRight />,
    },
);
