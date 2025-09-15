import figma from '@figma/code-connect';

import {CircleChevronsRight} from '../lib';

figma.connect(
    CircleChevronsRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5324%3A85',
    {
        example: () => <CircleChevronsRight />,
    },
);
