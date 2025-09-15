import figma from '@figma/code-connect';

import LayoutHeaderCellsLargeThunderbolt from '../lib/LayoutHeaderCellsLargeThunderbolt';

figma.connect(
    LayoutHeaderCellsLargeThunderbolt,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A924',
    {
        example: () => <LayoutHeaderCellsLargeThunderbolt />,
    },
);
