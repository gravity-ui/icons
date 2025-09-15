import figma from '@figma/code-connect';

import {CircleLetterX} from '../lib';

figma.connect(
    CircleLetterX,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A191',
    {
        example: () => <CircleLetterX />,
    },
);
