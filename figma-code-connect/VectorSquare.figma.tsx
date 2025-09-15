import figma from '@figma/code-connect';

import {VectorSquare} from '../lib';

figma.connect(
    VectorSquare,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4733%3A203',
    {
        example: () => <VectorSquare />,
    },
);
