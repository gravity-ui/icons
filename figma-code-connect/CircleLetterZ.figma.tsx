import figma from '@figma/code-connect';

import {CircleLetterZ} from '../lib';

figma.connect(
    CircleLetterZ,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A201',
    {
        example: () => <CircleLetterZ />,
    },
);
