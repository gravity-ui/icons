import figma from '@figma/code-connect';

import Heading6 from '../lib/Heading6';

figma.connect(
    Heading6,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1192',
    {
        example: () => <Heading6 />,
    },
);
