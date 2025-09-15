import figma from '@figma/code-connect';

import {ClockArrowRotateLeft} from '../lib';

figma.connect(
    ClockArrowRotateLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A311',
    {
        example: () => <ClockArrowRotateLeft />,
    },
);
