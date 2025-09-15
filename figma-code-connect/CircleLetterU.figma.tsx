import figma from '@figma/code-connect';

import {CircleLetterU} from '../lib';

figma.connect(
    CircleLetterU,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A181',
    {
        example: () => <CircleLetterU />,
    },
);
