import figma from '@figma/code-connect';

import Hand from '../lib/Hand';

figma.connect(
    Hand,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4612%3A63',
    {
        example: () => <Hand />,
    },
);
