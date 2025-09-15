import figma from '@figma/code-connect';

import CirclesIntersection from '../lib/CirclesIntersection';

figma.connect(
    CirclesIntersection,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A992',
    {
        example: () => <CirclesIntersection />,
    },
);
