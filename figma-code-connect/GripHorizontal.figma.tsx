import figma from '@figma/code-connect';

import GripHorizontal from '../lib/GripHorizontal';

figma.connect(
    GripHorizontal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3782%3A87126',
    {
        example: () => <GripHorizontal />,
    },
);
