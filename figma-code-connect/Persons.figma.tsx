import figma from '@figma/code-connect';

import Persons from '../lib/Persons';

figma.connect(
    Persons,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2317%3A84068',
    {
        example: () => <Persons />,
    },
);
