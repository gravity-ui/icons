import figma from '@figma/code-connect';

import Database from '../lib/Database';

figma.connect(
    Database,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A121972',
    {
        example: () => <Database />,
    },
);
