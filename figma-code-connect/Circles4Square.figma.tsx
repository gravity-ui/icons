import figma from '@figma/code-connect';

import {Circles4Square} from '../lib';

figma.connect(
    Circles4Square,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4593%3A180',
    {
        example: () => <Circles4Square />,
    },
);
