import figma from '@figma/code-connect';

import Heading from '../lib/Heading';

figma.connect(
    Heading,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A288',
    {
        example: () => <Heading />,
    },
);
