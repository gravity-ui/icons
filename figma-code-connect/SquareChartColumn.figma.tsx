import figma from '@figma/code-connect';

import {SquareChartColumn} from '../lib';

figma.connect(
    SquareChartColumn,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1264',
    {
        example: () => <SquareChartColumn />,
    },
);
