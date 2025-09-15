import figma from '@figma/code-connect';

import {ArrowShapeLeftToLine} from '../lib';

figma.connect(
    ArrowShapeLeftToLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A747',
    {
        example: () => <ArrowShapeLeftToLine />,
    },
);
