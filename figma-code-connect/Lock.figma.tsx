import figma from '@figma/code-connect';

import Lock from '../lib/Lock';

figma.connect(
    Lock,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1990%3A91623',
    {
        example: () => <Lock />,
    },
);
