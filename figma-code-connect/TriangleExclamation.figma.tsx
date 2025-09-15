import figma from '@figma/code-connect';

import TriangleExclamation from '../lib/TriangleExclamation';

figma.connect(
    TriangleExclamation,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79362',
    {
        example: () => <TriangleExclamation />,
    },
);
