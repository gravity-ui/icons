import figma from '@figma/code-connect';

import SquareChartBar from '../lib/SquareChartBar';

figma.connect(
    SquareChartBar,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1272',
    {
        example: () => <SquareChartBar />,
    },
);
