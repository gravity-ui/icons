import figma from '@figma/code-connect';

import {MathIntersectionShape} from '../lib';

figma.connect(
    MathIntersectionShape,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A325',
    {
        example: () => <MathIntersectionShape />,
    },
);
