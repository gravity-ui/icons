import figma from '@figma/code-connect';

import ChevronsCollapseUpRight from '../lib/ChevronsCollapseUpRight';

figma.connect(
    ChevronsCollapseUpRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2246%3A75454',
    {
        example: () => <ChevronsCollapseUpRight />,
    },
);
