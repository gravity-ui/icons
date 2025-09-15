import figma from '@figma/code-connect';

import Dice2 from '../lib/Dice2';

figma.connect(
    Dice2,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4615%3A240',
    {
        example: () => <Dice2 />,
    },
);
