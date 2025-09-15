import figma from '@figma/code-connect';

import {Eraser} from '../lib';

figma.connect(
    Eraser,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4612%3A112',
    {
        example: () => <Eraser />,
    },
);
