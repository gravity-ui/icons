import figma from '@figma/code-connect';

import GearDot from '../lib/GearDot';

figma.connect(
    GearDot,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6470%3A101',
    {
        example: () => <GearDot />,
    },
);
