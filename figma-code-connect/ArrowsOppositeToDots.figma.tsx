import figma from '@figma/code-connect';

import ArrowsOppositeToDots from '../lib/ArrowsOppositeToDots';

figma.connect(
    ArrowsOppositeToDots,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1046',
    {
        example: () => <ArrowsOppositeToDots />,
    },
);
