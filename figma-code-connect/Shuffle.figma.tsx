import figma from '@figma/code-connect';

import {Shuffle} from '../lib';

figma.connect(
    Shuffle,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A883',
    {
        example: () => <Shuffle />,
    },
);
