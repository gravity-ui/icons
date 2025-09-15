import figma from '@figma/code-connect';

import NutHex from '../lib/NutHex';

figma.connect(
    NutHex,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9051%3A82',
    {
        example: () => <NutHex />,
    },
);
