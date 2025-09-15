import figma from '@figma/code-connect';

import BranchesDown from '../lib/BranchesDown';

figma.connect(
    BranchesDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A105',
    {
        example: () => <BranchesDown />,
    },
);
