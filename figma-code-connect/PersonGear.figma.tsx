import figma from '@figma/code-connect';

import {PersonGear} from '../lib';

figma.connect(
    PersonGear,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9051%3A106',
    {
        example: () => <PersonGear />,
    },
);
