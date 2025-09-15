import figma from '@figma/code-connect';

import {Passport} from '../lib';

figma.connect(
    Passport,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2309%3A79738',
    {
        example: () => <Passport />,
    },
);
