import figma from '@figma/code-connect';

import Bucket from '../lib/Bucket';

figma.connect(
    Bucket,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79272',
    {
        example: () => <Bucket />,
    },
);
