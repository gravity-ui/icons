import figma from '@figma/code-connect';

import CloudNutHex from '../lib/CloudNutHex';

figma.connect(
    CloudNutHex,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9051%3A88',
    {
        example: () => <CloudNutHex />,
    },
);
