import figma from '@figma/code-connect';

import Display from '../lib/Display';

figma.connect(
    Display,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1985%3A92802',
    {
        example: () => <Display />,
    },
);
