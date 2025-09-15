import figma from '@figma/code-connect';

import {ChartPie} from '../lib';

figma.connect(
    ChartPie,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A120196',
    {
        example: () => <ChartPie />,
    },
);
