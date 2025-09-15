import figma from '@figma/code-connect';

import {CircleNumber1} from '../lib';

figma.connect(
    CircleNumber1,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2302%3A78266',
    {
        example: () => <CircleNumber1 />,
    },
);
