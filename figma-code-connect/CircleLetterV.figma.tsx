import figma from '@figma/code-connect';

import CircleLetterV from '../lib/CircleLetterV';

figma.connect(
    CircleLetterV,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A186',
    {
        example: () => <CircleLetterV />,
    },
);
