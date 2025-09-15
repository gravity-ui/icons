import figma from '@figma/code-connect';

import {CircleLink} from '../lib';

figma.connect(
    CircleLink,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11293%3A1455',
    {
        example: () => <CircleLink />,
    },
);
