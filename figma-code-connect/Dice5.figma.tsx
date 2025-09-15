import figma from '@figma/code-connect';

import Dice5 from '../lib/Dice5';

figma.connect(
    Dice5,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4615%3A264',
    {
        example: () => <Dice5 />,
    },
);
