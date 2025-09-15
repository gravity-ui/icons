import figma from '@figma/code-connect';

import {BarsAscendingAlignCenter} from '../lib';

figma.connect(
    BarsAscendingAlignCenter,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4586%3A157',
    {
        example: () => <BarsAscendingAlignCenter />,
    },
);
