import figma from '@figma/code-connect';

import Xmark from '../lib/Xmark';

figma.connect(
    Xmark,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1909%3A88269',
    {
        example: () => <Xmark />,
    },
);
