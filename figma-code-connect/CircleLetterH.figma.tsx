import figma from '@figma/code-connect';

import CircleLetterH from '../lib/CircleLetterH';

figma.connect(
    CircleLetterH,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2302%3A78229',
    {
        example: () => <CircleLetterH />,
    },
);
