import figma from '@figma/code-connect';

import ArrowShapeRightFromLine from '../lib/ArrowShapeRightFromLine';

figma.connect(
    ArrowShapeRightFromLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A768',
    {
        example: () => <ArrowShapeRightFromLine />,
    },
);
