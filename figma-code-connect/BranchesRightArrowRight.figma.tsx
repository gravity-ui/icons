import figma from '@figma/code-connect';

import BranchesRightArrowRight from '../lib/BranchesRightArrowRight';

figma.connect(
    BranchesRightArrowRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1112',
    {
        example: () => <BranchesRightArrowRight />,
    },
);
