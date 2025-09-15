import figma from '@figma/code-connect';

import {ChevronsDown} from '../lib';

figma.connect(
    ChevronsDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2977%3A85819',
    {
        example: () => <ChevronsDown />,
    },
);
