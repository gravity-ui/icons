import figma from '@figma/code-connect';

import TriangleDown from '../lib/TriangleDown';

figma.connect(
    TriangleDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4732%3A147',
    {
        example: () => <TriangleDown />,
    },
);
