import figma from '@figma/code-connect';

import ArrowShapeRightToLine from '../lib/ArrowShapeRightToLine';

figma.connect(
    ArrowShapeRightToLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A754',
    {
        example: () => <ArrowShapeRightToLine />,
    },
);
