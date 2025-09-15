import figma from '@figma/code-connect';

import {Flask} from '../lib';

figma.connect(
    Flask,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79277',
    {
        example: () => <Flask />,
    },
);
