import figma from '@figma/code-connect';

import {ShoppingBag} from '../lib';

figma.connect(
    ShoppingBag,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2243%3A85220',
    {
        example: () => <ShoppingBag />,
    },
);
