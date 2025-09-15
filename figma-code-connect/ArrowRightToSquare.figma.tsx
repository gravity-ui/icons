import figma from '@figma/code-connect';

import ArrowRightToSquare from '../lib/ArrowRightToSquare';

figma.connect(
    ArrowRightToSquare,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3779%3A87188',
    {
        example: () => <ArrowRightToSquare />,
    },
);
