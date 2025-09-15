import figma from '@figma/code-connect';

import CircleLetterA from '../lib/CircleLetterA';

figma.connect(
    CircleLetterA,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A100',
    {
        example: () => <CircleLetterA />,
    },
);
