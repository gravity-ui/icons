import figma from '@figma/code-connect';

import Sun from '../lib/Sun';

figma.connect(
    Sun,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1063',
    {
        example: () => <Sun />,
    },
);
