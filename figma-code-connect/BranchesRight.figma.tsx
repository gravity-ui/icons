import figma from '@figma/code-connect';

import BranchesRight from '../lib/BranchesRight';

figma.connect(
    BranchesRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A96',
    {
        example: () => <BranchesRight />,
    },
);
