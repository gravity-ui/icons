import figma from '@figma/code-connect';

import VectorCircle from '../lib/VectorCircle';

figma.connect(
    VectorCircle,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4733%3A215',
    {
        example: () => <VectorCircle />,
    },
);
