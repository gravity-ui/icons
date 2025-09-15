import figma from '@figma/code-connect';

import SquareMinus from '../lib/SquareMinus';

figma.connect(
    SquareMinus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76484',
    {
        example: () => <SquareMinus />,
    },
);
