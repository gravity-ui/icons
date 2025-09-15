import figma from '@figma/code-connect';

import {ArrowShapeDown} from '../lib';

figma.connect(
    ArrowShapeDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5571%3A211',
    {
        example: () => <ArrowShapeDown />,
    },
);
