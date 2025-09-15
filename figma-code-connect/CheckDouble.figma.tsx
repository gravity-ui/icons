import figma from '@figma/code-connect';

import {CheckDouble} from '../lib';

figma.connect(
    CheckDouble,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=27293%3A23',
    {
        example: () => <CheckDouble />,
    },
);
