import figma from '@figma/code-connect';

import {Ellipsis} from '../lib';

figma.connect(
    Ellipsis,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1909%3A88271',
    {
        example: () => <Ellipsis />,
    },
);
