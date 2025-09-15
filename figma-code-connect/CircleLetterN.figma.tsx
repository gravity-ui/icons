import figma from '@figma/code-connect';

import {CircleLetterN} from '../lib';

figma.connect(
    CircleLetterN,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A157',
    {
        example: () => <CircleLetterN />,
    },
);
