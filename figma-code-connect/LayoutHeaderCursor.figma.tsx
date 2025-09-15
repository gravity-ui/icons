import figma from '@figma/code-connect';

import LayoutHeaderCursor from '../lib/LayoutHeaderCursor';

figma.connect(
    LayoutHeaderCursor,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1342',
    {
        example: () => <LayoutHeaderCursor />,
    },
);
