import figma from '@figma/code-connect';

import Dots9 from '../lib/Dots9';

figma.connect(
    Dots9,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4595%3A228',
    {
        example: () => <Dots9 />,
    },
);
