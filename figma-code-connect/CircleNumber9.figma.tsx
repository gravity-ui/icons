import figma from '@figma/code-connect';

import {CircleNumber9} from '../lib';

figma.connect(
    CircleNumber9,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2317%3A78988',
    {
        example: () => <CircleNumber9 />,
    },
);
