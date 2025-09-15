import figma from '@figma/code-connect';

import {CircleNumber4} from '../lib';

figma.connect(
    CircleNumber4,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22139%3A220',
    {
        example: () => <CircleNumber4 />,
    },
);
