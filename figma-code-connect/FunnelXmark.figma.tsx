import figma from '@figma/code-connect';

import FunnelXmark from '../lib/FunnelXmark';

figma.connect(
    FunnelXmark,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11293%3A1262',
    {
        example: () => <FunnelXmark />,
    },
);
