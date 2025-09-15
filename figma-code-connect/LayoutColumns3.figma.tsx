import figma from '@figma/code-connect';

import LayoutColumns3 from '../lib/LayoutColumns3';

figma.connect(
    LayoutColumns3,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4656%3A187',
    {
        example: () => <LayoutColumns3 />,
    },
);
