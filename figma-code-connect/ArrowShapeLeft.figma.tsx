import figma from '@figma/code-connect';

import ArrowShapeLeft from '../lib/ArrowShapeLeft';

figma.connect(
    ArrowShapeLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5571%3A220',
    {
        example: () => <ArrowShapeLeft />,
    },
);
