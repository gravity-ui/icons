import figma from '@figma/code-connect';

import Server from '../lib/Server';

figma.connect(
    Server,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76645',
    {
        example: () => <Server />,
    },
);
