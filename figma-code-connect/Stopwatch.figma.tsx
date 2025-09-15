import figma from '@figma/code-connect';

import Stopwatch from '../lib/Stopwatch';

figma.connect(
    Stopwatch,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1028',
    {
        example: () => <Stopwatch />,
    },
);
