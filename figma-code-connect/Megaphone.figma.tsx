import figma from '@figma/code-connect';

import {Megaphone} from '../lib';

figma.connect(
    Megaphone,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76864',
    {
        example: () => <Megaphone />,
    },
);
