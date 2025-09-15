import figma from '@figma/code-connect';

import Heading3 from '../lib/Heading3';

figma.connect(
    Heading3,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1168',
    {
        example: () => <Heading3 />,
    },
);
