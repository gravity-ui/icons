import figma from '@figma/code-connect';

import FaceNeutral from '../lib/FaceNeutral';

figma.connect(
    FaceNeutral,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2910%3A77158',
    {
        example: () => <FaceNeutral />,
    },
);
