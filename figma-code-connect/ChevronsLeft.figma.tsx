import figma from '@figma/code-connect';

import {ChevronsLeft} from '../lib';

figma.connect(
    ChevronsLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2977%3A85834',
    {
        example: () => <ChevronsLeft />,
    },
);
