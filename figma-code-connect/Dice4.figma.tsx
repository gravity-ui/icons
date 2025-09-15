import figma from '@figma/code-connect';

import {Dice4} from '../lib';

figma.connect(
    Dice4,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4615%3A255',
    {
        example: () => <Dice4 />,
    },
);
