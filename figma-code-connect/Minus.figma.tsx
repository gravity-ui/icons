import figma from '@figma/code-connect';

import Minus from '../lib/Minus';

figma.connect(
    Minus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1909%3A88268',
    {
        example: () => <Minus />,
    },
);
