import figma from '@figma/code-connect';

import {BarsDescendingAlignCenter} from '../lib';

figma.connect(
    BarsDescendingAlignCenter,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4586%3A136',
    {
        example: () => <BarsDescendingAlignCenter />,
    },
);
