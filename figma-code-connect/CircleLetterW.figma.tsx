import figma from '@figma/code-connect';

import {CircleLetterW} from '../lib';

figma.connect(
    CircleLetterW,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2302%3A78215',
    {
        example: () => <CircleLetterW />,
    },
);
