import figma from '@figma/code-connect';

import {Pin} from '../lib';

figma.connect(
    Pin,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2240%3A85254',
    {
        example: () => <Pin />,
    },
);
