import figma from '@figma/code-connect';

import ArrowUpToLine from '../lib/ArrowUpToLine';

figma.connect(
    ArrowUpToLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4615%3A225',
    {
        example: () => <ArrowUpToLine />,
    },
);
