import figma from '@figma/code-connect';

import {FaceRobot} from '../lib';

figma.connect(
    FaceRobot,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A143',
    {
        example: () => <FaceRobot />,
    },
);
