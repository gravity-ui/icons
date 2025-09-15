import figma from '@figma/code-connect';

import FaceAngry from '../lib/FaceAngry';

figma.connect(
    FaceAngry,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22150%3A1743',
    {
        example: () => <FaceAngry />,
    },
);
