import figma from '@figma/code-connect';

import {ChevronsCollapseHorizontal} from '../lib';

figma.connect(
    ChevronsCollapseHorizontal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2963%3A82914',
    {
        example: () => <ChevronsCollapseHorizontal />,
    },
);
