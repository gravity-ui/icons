import figma from '@figma/code-connect';

import CircleLetterG from '../lib/CircleLetterG';

figma.connect(
    CircleLetterG,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A127',
    {
        example: () => <CircleLetterG />,
    },
);
