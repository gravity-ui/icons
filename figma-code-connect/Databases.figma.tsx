import figma from '@figma/code-connect';

import Databases from '../lib/Databases';

figma.connect(
    Databases,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2254%3A77268',
    {
        example: () => <Databases />,
    },
);
