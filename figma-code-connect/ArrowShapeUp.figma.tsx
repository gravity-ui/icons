import figma from '@figma/code-connect';

import ArrowShapeUp from '../lib/ArrowShapeUp';

figma.connect(
    ArrowShapeUp,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5571%3A241',
    {
        example: () => <ArrowShapeUp />,
    },
);
