import figma from '@figma/code-connect';

import ArrowLeftToLine from '../lib/ArrowLeftToLine';

figma.connect(
    ArrowLeftToLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A729',
    {
        example: () => <ArrowLeftToLine />,
    },
);
