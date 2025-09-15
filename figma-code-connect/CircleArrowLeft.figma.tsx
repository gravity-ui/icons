import figma from '@figma/code-connect';

import {CircleArrowLeft} from '../lib';

figma.connect(
    CircleArrowLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5151%3A128',
    {
        example: () => <CircleArrowLeft />,
    },
);
