import figma from '@figma/code-connect';

import ArrowsExpandHorizontal from '../lib/ArrowsExpandHorizontal';

figma.connect(
    ArrowsExpandHorizontal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22148%3A1483',
    {
        example: () => <ArrowsExpandHorizontal />,
    },
);
