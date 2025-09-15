import figma from '@figma/code-connect';

import ChevronsUp from '../lib/ChevronsUp';

figma.connect(
    ChevronsUp,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2977%3A85829',
    {
        example: () => <ChevronsUp />,
    },
);
