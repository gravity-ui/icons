import figma from '@figma/code-connect';

import {ArrowShapeLeftFromLine} from '../lib';

figma.connect(
    ArrowShapeLeftFromLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A761',
    {
        example: () => <ArrowShapeLeftFromLine />,
    },
);
