import figma from '@figma/code-connect';

import ArrowLeftFromLine from '../lib/ArrowLeftFromLine';

figma.connect(
    ArrowLeftFromLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A803',
    {
        example: () => <ArrowLeftFromLine />,
    },
);
