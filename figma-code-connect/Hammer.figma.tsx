import figma from '@figma/code-connect';

import Hammer from '../lib/Hammer';

figma.connect(
    Hammer,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=13142%3A202',
    {
        example: () => <Hammer />,
    },
);
