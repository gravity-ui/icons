import figma from '@figma/code-connect';

import ShoppingBasket from '../lib/ShoppingBasket';

figma.connect(
    ShoppingBasket,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2243%3A85235',
    {
        example: () => <ShoppingBasket />,
    },
);
