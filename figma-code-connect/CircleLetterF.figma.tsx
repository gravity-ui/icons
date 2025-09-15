import figma from '@figma/code-connect';

import {CircleLetterF} from '../lib';

figma.connect(
    CircleLetterF,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2302%3A78223',
    {
        example: () => <CircleLetterF />,
    },
);
