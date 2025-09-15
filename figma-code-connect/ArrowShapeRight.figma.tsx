import figma from '@figma/code-connect';

import ArrowShapeRight from '../lib/ArrowShapeRight';

figma.connect(
    ArrowShapeRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5571%3A231',
    {
        example: () => <ArrowShapeRight />,
    },
);
