import figma from '@figma/code-connect';

import {Snail} from '../lib';

figma.connect(
    Snail,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11293%3A1199',
    {
        example: () => <Snail />,
    },
);
