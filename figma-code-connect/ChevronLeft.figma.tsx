import figma from '@figma/code-connect';

import ChevronLeft from '../lib/ChevronLeft';

figma.connect(
    ChevronLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2963%3A82943',
    {
        example: () => <ChevronLeft />,
    },
);
