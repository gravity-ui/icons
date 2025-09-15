import figma from '@figma/code-connect';

import {CircleLetterK} from '../lib';

figma.connect(
    CircleLetterK,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A142',
    {
        example: () => <CircleLetterK />,
    },
);
