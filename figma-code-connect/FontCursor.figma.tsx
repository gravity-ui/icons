import figma from '@figma/code-connect';

import FontCursor from '../lib/FontCursor';

figma.connect(
    FontCursor,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A967',
    {
        example: () => <FontCursor />,
    },
);
