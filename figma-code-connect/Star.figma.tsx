import figma from '@figma/code-connect';

import {Star} from '../lib';

figma.connect(
    Star,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1907%3A88165',
    {
        example: () => <Star />,
    },
);
