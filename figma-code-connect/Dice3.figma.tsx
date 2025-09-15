import figma from '@figma/code-connect';

import {Dice3} from '../lib';

figma.connect(
    Dice3,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4615%3A247',
    {
        example: () => <Dice3 />,
    },
);
