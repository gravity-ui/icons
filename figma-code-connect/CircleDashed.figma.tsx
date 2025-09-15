import figma from '@figma/code-connect';

import CircleDashed from '../lib/CircleDashed';

figma.connect(
    CircleDashed,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5157%3A525',
    {
        example: () => <CircleDashed />,
    },
);
