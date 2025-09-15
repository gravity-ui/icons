import figma from '@figma/code-connect';

import {CircleLetterL} from '../lib';

figma.connect(
    CircleLetterL,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A147',
    {
        example: () => <CircleLetterL />,
    },
);
