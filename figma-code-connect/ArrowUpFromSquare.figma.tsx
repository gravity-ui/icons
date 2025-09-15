import figma from '@figma/code-connect';

import ArrowUpFromSquare from '../lib/ArrowUpFromSquare';

figma.connect(
    ArrowUpFromSquare,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76808',
    {
        example: () => <ArrowUpFromSquare />,
    },
);
