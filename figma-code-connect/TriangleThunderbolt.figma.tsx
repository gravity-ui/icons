import figma from '@figma/code-connect';

import TriangleThunderbolt from '../lib/TriangleThunderbolt';

figma.connect(
    TriangleThunderbolt,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4723%3A143',
    {
        example: () => <TriangleThunderbolt />,
    },
);
