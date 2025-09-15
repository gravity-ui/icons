import figma from '@figma/code-connect';

import {CircleQuestion} from '../lib';

figma.connect(
    CircleQuestion,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1909%3A87503',
    {
        example: () => <CircleQuestion />,
    },
);
