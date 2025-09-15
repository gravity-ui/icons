import figma from '@figma/code-connect';

import {EllipsisVertical} from '../lib';

figma.connect(
    EllipsisVertical,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1909%3A88272',
    {
        example: () => <EllipsisVertical />,
    },
);
