import figma from '@figma/code-connect';

import {Grip} from '../lib';

figma.connect(
    Grip,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1909%3A88273',
    {
        example: () => <Grip />,
    },
);
