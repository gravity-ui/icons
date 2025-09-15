import figma from '@figma/code-connect';

import BarsDescendingAlignLeft from '../lib/BarsDescendingAlignLeft';

figma.connect(
    BarsDescendingAlignLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4586%3A129',
    {
        example: () => <BarsDescendingAlignLeft />,
    },
);
