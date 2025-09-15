import figma from '@figma/code-connect';

import {ArrowLeft} from '../lib';

figma.connect(
    ArrowLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3857%3A87207',
    {
        example: () => <ArrowLeft />,
    },
);
