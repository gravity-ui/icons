import figma from '@figma/code-connect';

import {CircleLetterO} from '../lib';

figma.connect(
    CircleLetterO,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A162',
    {
        example: () => <CircleLetterO />,
    },
);
