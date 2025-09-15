import figma from '@figma/code-connect';

import {Rectangles4} from '../lib';

figma.connect(
    Rectangles4,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4720%3A85',
    {
        example: () => <Rectangles4 />,
    },
);
