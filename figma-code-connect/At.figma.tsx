import figma from '@figma/code-connect';

import At from '../lib/At';

figma.connect(
    At,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3884%3A89818',
    {
        example: () => <At />,
    },
);
