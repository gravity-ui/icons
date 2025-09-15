import figma from '@figma/code-connect';

import {CardHeart} from '../lib';

figma.connect(
    CardHeart,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9080%3A242',
    {
        example: () => <CardHeart />,
    },
);
