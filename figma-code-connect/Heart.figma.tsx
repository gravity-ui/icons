import figma from '@figma/code-connect';

import {Heart} from '../lib';

figma.connect(
    Heart,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2240%3A85269',
    {
        example: () => <Heart />,
    },
);
