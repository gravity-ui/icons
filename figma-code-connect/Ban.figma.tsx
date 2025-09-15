import figma from '@figma/code-connect';

import Ban from '../lib/Ban';

figma.connect(
    Ban,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3884%3A89824',
    {
        example: () => <Ban />,
    },
);
