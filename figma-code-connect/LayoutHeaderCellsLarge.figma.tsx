import figma from '@figma/code-connect';

import LayoutHeaderCellsLarge from '../lib/LayoutHeaderCellsLarge';

figma.connect(
    LayoutHeaderCellsLarge,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4734%3A252',
    {
        example: () => <LayoutHeaderCellsLarge />,
    },
);
