import figma from '@figma/code-connect';

import {Bulb} from '../lib';

figma.connect(
    Bulb,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79289',
    {
        example: () => <Bulb />,
    },
);
