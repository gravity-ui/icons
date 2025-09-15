import figma from '@figma/code-connect';

import Pulse from '../lib/Pulse';

figma.connect(
    Pulse,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1296',
    {
        example: () => <Pulse />,
    },
);
