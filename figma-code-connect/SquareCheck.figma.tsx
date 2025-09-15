import figma from '@figma/code-connect';

import SquareCheck from '../lib/SquareCheck';

figma.connect(
    SquareCheck,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76491',
    {
        example: () => <SquareCheck />,
    },
);
