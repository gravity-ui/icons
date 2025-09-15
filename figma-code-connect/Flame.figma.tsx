import figma from '@figma/code-connect';

import {Flame} from '../lib';

figma.connect(
    Flame,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4011%3A87749',
    {
        example: () => <Flame />,
    },
);
