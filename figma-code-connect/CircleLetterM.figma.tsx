import figma from '@figma/code-connect';

import {CircleLetterM} from '../lib';

figma.connect(
    CircleLetterM,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A152',
    {
        example: () => <CircleLetterM />,
    },
);
