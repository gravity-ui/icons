import figma from '@figma/code-connect';

import CircleLetterB from '../lib/CircleLetterB';

figma.connect(
    CircleLetterB,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A107',
    {
        example: () => <CircleLetterB />,
    },
);
