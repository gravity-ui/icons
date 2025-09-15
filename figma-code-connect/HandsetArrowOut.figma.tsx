import figma from '@figma/code-connect';

import {HandsetArrowOut} from '../lib';

figma.connect(
    HandsetArrowOut,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=16189%3A1165',
    {
        example: () => <HandsetArrowOut />,
    },
);
