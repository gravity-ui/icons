import figma from '@figma/code-connect';

import CircleLetterR from '../lib/CircleLetterR';

figma.connect(
    CircleLetterR,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2302%3A78235',
    {
        example: () => <CircleLetterR />,
    },
);
