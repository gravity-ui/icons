import figma from '@figma/code-connect';

import {CircleNumber5} from '../lib';

figma.connect(
    CircleNumber5,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A226',
    {
        example: () => <CircleNumber5 />,
    },
);
