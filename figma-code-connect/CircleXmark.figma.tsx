import figma from '@figma/code-connect';

import CircleXmark from '../lib/CircleXmark';

figma.connect(
    CircleXmark,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76539',
    {
        example: () => <CircleXmark />,
    },
);
