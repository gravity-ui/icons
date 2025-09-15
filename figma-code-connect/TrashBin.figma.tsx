import figma from '@figma/code-connect';

import {TrashBin} from '../lib';

figma.connect(
    TrashBin,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2260%3A76715',
    {
        example: () => <TrashBin />,
    },
);
