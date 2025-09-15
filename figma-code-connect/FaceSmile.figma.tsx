import figma from '@figma/code-connect';

import FaceSmile from '../lib/FaceSmile';

figma.connect(
    FaceSmile,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2910%3A77140',
    {
        example: () => <FaceSmile />,
    },
);
