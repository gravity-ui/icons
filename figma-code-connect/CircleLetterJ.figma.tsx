import figma from '@figma/code-connect';

import CircleLetterJ from '../lib/CircleLetterJ';

figma.connect(
    CircleLetterJ,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A137',
    {
        example: () => <CircleLetterJ />,
    },
);
