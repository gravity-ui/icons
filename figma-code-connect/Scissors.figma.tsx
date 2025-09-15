import figma from '@figma/code-connect';

import Scissors from '../lib/Scissors';

figma.connect(
    Scissors,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76821',
    {
        example: () => <Scissors />,
    },
);
