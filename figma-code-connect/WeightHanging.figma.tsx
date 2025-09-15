import figma from '@figma/code-connect';

import {WeightHanging} from '../lib';

figma.connect(
    WeightHanging,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A441',
    {
        example: () => <WeightHanging />,
    },
);
