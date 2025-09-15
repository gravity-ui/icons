import figma from '@figma/code-connect';

import Heading1 from '../lib/Heading1';

figma.connect(
    Heading1,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1152',
    {
        example: () => <Heading1 />,
    },
);
