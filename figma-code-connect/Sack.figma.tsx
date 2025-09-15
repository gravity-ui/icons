import figma from '@figma/code-connect';

import Sack from '../lib/Sack';

figma.connect(
    Sack,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A905',
    {
        example: () => <Sack />,
    },
);
