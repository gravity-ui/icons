import figma from '@figma/code-connect';

import Shapes3 from '../lib/Shapes3';

figma.connect(
    Shapes3,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1243',
    {
        example: () => <Shapes3 />,
    },
);
