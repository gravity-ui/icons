import figma from '@figma/code-connect';

import ShoppingCart from '../lib/ShoppingCart';

figma.connect(
    ShoppingCart,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2243%3A85213',
    {
        example: () => <ShoppingCart />,
    },
);
