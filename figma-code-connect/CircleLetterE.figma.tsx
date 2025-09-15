import figma from '@figma/code-connect';

import CircleLetterE from '../lib/CircleLetterE';

figma.connect(
    CircleLetterE,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A117',
    {
        example: () => <CircleLetterE />,
    },
);
