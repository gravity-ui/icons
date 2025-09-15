import figma from '@figma/code-connect';

import {Layers3Diagonal} from '../lib';

figma.connect(
    Layers3Diagonal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4593%3A204',
    {
        example: () => <Layers3Diagonal />,
    },
);
