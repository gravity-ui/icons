import figma from '@figma/code-connect';

import HandPointLeft from '../lib/HandPointLeft';

figma.connect(
    HandPointLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4615%3A355',
    {
        example: () => <HandPointLeft />,
    },
);
