import figma from '@figma/code-connect';

import {CircleNumber7} from '../lib';

figma.connect(
    CircleNumber7,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2308%3A79149',
    {
        example: () => <CircleNumber7 />,
    },
);
