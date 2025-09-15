import figma from '@figma/code-connect';

import {ChartMixed} from '../lib';

figma.connect(
    ChartMixed,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A668',
    {
        example: () => <ChartMixed />,
    },
);
