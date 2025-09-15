import figma from '@figma/code-connect';

import Cubes3 from '../lib/Cubes3';

figma.connect(
    Cubes3,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4165%3A20128',
    {
        example: () => <Cubes3 />,
    },
);
