import figma from '@figma/code-connect';

import Eye from '../lib/Eye';

figma.connect(
    Eye,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1909%3A88267',
    {
        example: () => <Eye />,
    },
);
