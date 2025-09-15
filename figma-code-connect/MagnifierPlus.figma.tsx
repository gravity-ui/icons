import figma from '@figma/code-connect';

import MagnifierPlus from '../lib/MagnifierPlus';

figma.connect(
    MagnifierPlus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79301',
    {
        example: () => <MagnifierPlus />,
    },
);
