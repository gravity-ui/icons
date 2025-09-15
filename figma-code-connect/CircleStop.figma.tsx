import figma from '@figma/code-connect';

import {CircleStop} from '../lib';

figma.connect(
    CircleStop,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76797',
    {
        example: () => <CircleStop />,
    },
);
