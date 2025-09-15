import figma from '@figma/code-connect';

import TriangleUp from '../lib/TriangleUp';

figma.connect(
    TriangleUp,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4732%3A165',
    {
        example: () => <TriangleUp />,
    },
);
