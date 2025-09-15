import figma from '@figma/code-connect';

import {BellDot} from '../lib';

figma.connect(
    BellDot,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6470%3A93',
    {
        example: () => <BellDot />,
    },
);
