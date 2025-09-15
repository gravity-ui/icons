import figma from '@figma/code-connect';

import {CardClub} from '../lib';

figma.connect(
    CardClub,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9080%3A247',
    {
        example: () => <CardClub />,
    },
);
