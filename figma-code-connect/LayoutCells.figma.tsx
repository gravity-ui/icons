import figma from '@figma/code-connect';

import LayoutCells from '../lib/LayoutCells';

figma.connect(
    LayoutCells,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4720%3A93',
    {
        example: () => <LayoutCells />,
    },
);
