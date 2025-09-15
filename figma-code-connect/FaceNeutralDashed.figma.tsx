import figma from '@figma/code-connect';

import {FaceNeutralDashed} from '../lib';

figma.connect(
    FaceNeutralDashed,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9080%3A191',
    {
        example: () => <FaceNeutralDashed />,
    },
);
