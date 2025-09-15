import figma from '@figma/code-connect';

import ArrowRightFromLine from '../lib/ArrowRightFromLine';

figma.connect(
    ArrowRightFromLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A812',
    {
        example: () => <ArrowRightFromLine />,
    },
);
