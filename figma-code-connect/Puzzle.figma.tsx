import figma from '@figma/code-connect';

import {Puzzle} from '../lib';

figma.connect(
    Puzzle,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2910%3A77258',
    {
        example: () => <Puzzle />,
    },
);
