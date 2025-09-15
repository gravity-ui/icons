import figma from '@figma/code-connect';

import {ChevronsCollapseVertical} from '../lib';

figma.connect(
    ChevronsCollapseVertical,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2246%3A75414',
    {
        example: () => <ChevronsCollapseVertical />,
    },
);
