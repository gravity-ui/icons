import figma from '@figma/code-connect';

import DiamondExclamation from '../lib/DiamondExclamation';

figma.connect(
    DiamondExclamation,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4077%3A88329',
    {
        example: () => <DiamondExclamation />,
    },
);
