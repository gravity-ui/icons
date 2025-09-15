import figma from '@figma/code-connect';

import Headphones from '../lib/Headphones';

figma.connect(
    Headphones,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A915',
    {
        example: () => <Headphones />,
    },
);
