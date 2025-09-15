import figma from '@figma/code-connect';

import CircleLetterY from '../lib/CircleLetterY';

figma.connect(
    CircleLetterY,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A196',
    {
        example: () => <CircleLetterY />,
    },
);
