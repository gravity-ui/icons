import figma from '@figma/code-connect';

import CircleLetterS from '../lib/CircleLetterS';

figma.connect(
    CircleLetterS,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A662',
    {
        example: () => <CircleLetterS />,
    },
);
