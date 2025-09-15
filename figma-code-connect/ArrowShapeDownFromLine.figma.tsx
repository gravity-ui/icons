import figma from '@figma/code-connect';

import {ArrowShapeDownFromLine} from '../lib';

figma.connect(
    ArrowShapeDownFromLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A796',
    {
        example: () => <ArrowShapeDownFromLine />,
    },
);
