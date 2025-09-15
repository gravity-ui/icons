import figma from '@figma/code-connect';

import LayoutHeaderCellsLargeLetterD from '../lib/LayoutHeaderCellsLargeLetterD';

figma.connect(
    LayoutHeaderCellsLargeLetterD,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A936',
    {
        example: () => <LayoutHeaderCellsLargeLetterD />,
    },
);
