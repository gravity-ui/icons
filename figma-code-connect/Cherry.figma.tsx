import figma from '@figma/code-connect';

import Cherry from '../lib/Cherry';

figma.connect(
    Cherry,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79346',
    {
        example: () => <Cherry />,
    },
);
