import figma from '@figma/code-connect';

import DatabaseMagnifier from '../lib/DatabaseMagnifier';

figma.connect(
    DatabaseMagnifier,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A813',
    {
        example: () => <DatabaseMagnifier />,
    },
);
