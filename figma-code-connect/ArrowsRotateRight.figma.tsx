import figma from '@figma/code-connect';

import ArrowsRotateRight from '../lib/ArrowsRotateRight';

figma.connect(
    ArrowsRotateRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2246%3A75479',
    {
        example: () => <ArrowsRotateRight />,
    },
);
