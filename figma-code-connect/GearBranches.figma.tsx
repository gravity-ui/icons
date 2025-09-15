import figma from '@figma/code-connect';

import GearBranches from '../lib/GearBranches';

figma.connect(
    GearBranches,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1406',
    {
        example: () => <GearBranches />,
    },
);
