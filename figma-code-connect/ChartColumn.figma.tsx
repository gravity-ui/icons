import figma from '@figma/code-connect';

import {ChartColumn} from '../lib';

figma.connect(
    ChartColumn,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2254%3A76077',
    {
        example: () => <ChartColumn />,
    },
);
