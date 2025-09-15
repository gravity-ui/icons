import figma from '@figma/code-connect';

import SquareXmark from '../lib/SquareXmark';

figma.connect(
    SquareXmark,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76498',
    {
        example: () => <SquareXmark />,
    },
);
