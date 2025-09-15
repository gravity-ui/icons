import figma from '@figma/code-connect';

import ArrowRightFromSquare from '../lib/ArrowRightFromSquare';

figma.connect(
    ArrowRightFromSquare,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3779%3A87178',
    {
        example: () => <ArrowRightFromSquare />,
    },
);
