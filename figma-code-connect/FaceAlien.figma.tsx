import figma from '@figma/code-connect';

import {FaceAlien} from '../lib';

figma.connect(
    FaceAlien,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4723%3A129',
    {
        example: () => <FaceAlien />,
    },
);
