import figma from '@figma/code-connect';

import {Circles4Diamond} from '../lib';

figma.connect(
    Circles4Diamond,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4593%3A172',
    {
        example: () => <Circles4Diamond />,
    },
);
