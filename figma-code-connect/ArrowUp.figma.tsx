import figma from '@figma/code-connect';

import {ArrowUp} from '../lib';

figma.connect(
    ArrowUp,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3857%3A87192',
    {
        example: () => <ArrowUp />,
    },
);
