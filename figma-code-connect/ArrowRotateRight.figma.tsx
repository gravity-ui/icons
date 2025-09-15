import figma from '@figma/code-connect';

import ArrowRotateRight from '../lib/ArrowRotateRight';

figma.connect(
    ArrowRotateRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2246%3A75469',
    {
        example: () => <ArrowRotateRight />,
    },
);
