import figma from '@figma/code-connect';

import ArrowUpFromLine from '../lib/ArrowUpFromLine';

figma.connect(
    ArrowUpFromLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4615%3A207',
    {
        example: () => <ArrowUpFromLine />,
    },
);
