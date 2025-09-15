import figma from '@figma/code-connect';

import {CircleLetterQ} from '../lib';

figma.connect(
    CircleLetterQ,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A167',
    {
        example: () => <CircleLetterQ />,
    },
);
