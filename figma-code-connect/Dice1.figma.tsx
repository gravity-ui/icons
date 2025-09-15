import figma from '@figma/code-connect';

import Dice1 from '../lib/Dice1';

figma.connect(
    Dice1,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4615%3A234',
    {
        example: () => <Dice1 />,
    },
);
