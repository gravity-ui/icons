import figma from '@figma/code-connect';

import {ChartColumnStacked} from '../lib';

figma.connect(
    ChartColumnStacked,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4739%3A102',
    {
        example: () => <ChartColumnStacked />,
    },
);
