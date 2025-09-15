import figma from '@figma/code-connect';

import {BroomMotion} from '../lib';

figma.connect(
    BroomMotion,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4612%3A102',
    {
        example: () => <BroomMotion />,
    },
);
