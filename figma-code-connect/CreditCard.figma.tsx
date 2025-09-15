import figma from '@figma/code-connect';

import {CreditCard} from '../lib';

figma.connect(
    CreditCard,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79322',
    {
        example: () => <CreditCard />,
    },
);
