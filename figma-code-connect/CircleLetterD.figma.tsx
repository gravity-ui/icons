import figma from '@figma/code-connect';

import CircleLetterD from '../lib/CircleLetterD';

figma.connect(
    CircleLetterD,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A112',
    {
        example: () => <CircleLetterD />,
    },
);
