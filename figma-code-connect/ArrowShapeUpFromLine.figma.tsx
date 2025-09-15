import figma from '@figma/code-connect';

import ArrowShapeUpFromLine from '../lib/ArrowShapeUpFromLine';

figma.connect(
    ArrowShapeUpFromLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A789',
    {
        example: () => <ArrowShapeUpFromLine />,
    },
);
