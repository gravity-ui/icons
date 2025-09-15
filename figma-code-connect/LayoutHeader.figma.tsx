import figma from '@figma/code-connect';

import LayoutHeader from '../lib/LayoutHeader';

figma.connect(
    LayoutHeader,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4656%3A167',
    {
        example: () => <LayoutHeader />,
    },
);
