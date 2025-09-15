import figma from '@figma/code-connect';

import ChevronsExpandVertical from '../lib/ChevronsExpandVertical';

figma.connect(
    ChevronsExpandVertical,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2246%3A75423',
    {
        example: () => <ChevronsExpandVertical />,
    },
);
