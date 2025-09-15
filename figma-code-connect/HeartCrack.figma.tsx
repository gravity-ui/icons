import figma from '@figma/code-connect';

import HeartCrack from '../lib/HeartCrack';

figma.connect(
    HeartCrack,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A707',
    {
        example: () => <HeartCrack />,
    },
);
