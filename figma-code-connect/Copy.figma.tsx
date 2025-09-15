import figma from '@figma/code-connect';

import Copy from '../lib/Copy';

figma.connect(
    Copy,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79332',
    {
        example: () => <Copy />,
    },
);
