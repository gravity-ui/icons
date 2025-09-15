import figma from '@figma/code-connect';

import {ChartAreaStacked} from '../lib';

figma.connect(
    ChartAreaStacked,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3860%3A87060',
    {
        example: () => <ChartAreaStacked />,
    },
);
