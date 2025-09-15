import figma from '@figma/code-connect';

import {CardDiamond} from '../lib';

figma.connect(
    CardDiamond,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9080%3A237',
    {
        example: () => <CardDiamond />,
    },
);
