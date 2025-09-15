import figma from '@figma/code-connect';

import ArrowShapeDownToLine from '../lib/ArrowShapeDownToLine';

figma.connect(
    ArrowShapeDownToLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A782',
    {
        example: () => <ArrowShapeDownToLine />,
    },
);
