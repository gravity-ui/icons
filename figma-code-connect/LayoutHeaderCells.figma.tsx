import figma from '@figma/code-connect';

import {LayoutHeaderCells} from '../lib';

figma.connect(
    LayoutHeaderCells,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4734%3A243',
    {
        example: () => <LayoutHeaderCells />,
    },
);
