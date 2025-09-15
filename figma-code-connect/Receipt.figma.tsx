import figma from '@figma/code-connect';

import Receipt from '../lib/Receipt';

figma.connect(
    Receipt,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4723%3A148',
    {
        example: () => <Receipt />,
    },
);
