import figma from '@figma/code-connect';

import {HandOk} from '../lib';

figma.connect(
    HandOk,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4612%3A69',
    {
        example: () => <HandOk />,
    },
);
