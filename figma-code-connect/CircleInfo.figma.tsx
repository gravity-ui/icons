import figma from '@figma/code-connect';

import {CircleInfo} from '../lib';

figma.connect(
    CircleInfo,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1909%3A87505',
    {
        example: () => <CircleInfo />,
    },
);
