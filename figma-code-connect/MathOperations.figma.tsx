import figma from '@figma/code-connect';

import {MathOperations} from '../lib';

figma.connect(
    MathOperations,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A416',
    {
        example: () => <MathOperations />,
    },
);
