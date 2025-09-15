import figma from '@figma/code-connect';

import Crop from '../lib/Crop';

figma.connect(
    Crop,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A877',
    {
        example: () => <Crop />,
    },
);
