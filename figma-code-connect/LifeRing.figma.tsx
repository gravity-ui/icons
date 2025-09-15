import figma from '@figma/code-connect';

import LifeRing from '../lib/LifeRing';

figma.connect(
    LifeRing,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79356',
    {
        example: () => <LifeRing />,
    },
);
