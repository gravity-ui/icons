import figma from '@figma/code-connect';

import {HandPointUp} from '../lib';

figma.connect(
    HandPointUp,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2317%3A78881',
    {
        example: () => <HandPointUp />,
    },
);
