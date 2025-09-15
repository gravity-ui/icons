import figma from '@figma/code-connect';

import CircleRuble from '../lib/CircleRuble';

figma.connect(
    CircleRuble,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A614',
    {
        example: () => <CircleRuble />,
    },
);
