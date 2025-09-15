import figma from '@figma/code-connect';

import {Dice6} from '../lib';

figma.connect(
    Dice6,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4615%3A274',
    {
        example: () => <Dice6 />,
    },
);
