import figma from '@figma/code-connect';

import {Shapes4} from '../lib';

figma.connect(
    Shapes4,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1255',
    {
        example: () => <Shapes4 />,
    },
);
