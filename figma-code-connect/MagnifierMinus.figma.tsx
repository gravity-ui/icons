import figma from '@figma/code-connect';

import {MagnifierMinus} from '../lib';

figma.connect(
    MagnifierMinus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79295',
    {
        example: () => <MagnifierMinus />,
    },
);
