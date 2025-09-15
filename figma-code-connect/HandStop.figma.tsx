import figma from '@figma/code-connect';

import {HandStop} from '../lib';

figma.connect(
    HandStop,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4612%3A75',
    {
        example: () => <HandStop />,
    },
);
