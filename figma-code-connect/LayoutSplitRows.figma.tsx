import figma from '@figma/code-connect';

import LayoutSplitRows from '../lib/LayoutSplitRows';

figma.connect(
    LayoutSplitRows,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9051%3A37',
    {
        example: () => <LayoutSplitRows />,
    },
);
