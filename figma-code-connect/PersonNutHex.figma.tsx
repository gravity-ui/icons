import figma from '@figma/code-connect';

import {PersonNutHex} from '../lib';

figma.connect(
    PersonNutHex,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9051%3A95',
    {
        example: () => <PersonNutHex />,
    },
);
