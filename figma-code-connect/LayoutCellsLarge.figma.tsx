import figma from '@figma/code-connect';

import LayoutCellsLarge from '../lib/LayoutCellsLarge';

figma.connect(
    LayoutCellsLarge,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4720%3A102',
    {
        example: () => <LayoutCellsLarge />,
    },
);
