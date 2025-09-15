import figma from '@figma/code-connect';

import {ChevronsExpandHorizontal} from '../lib';

figma.connect(
    ChevronsExpandHorizontal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2963%3A82919',
    {
        example: () => <ChevronsExpandHorizontal />,
    },
);
