import figma from '@figma/code-connect';

import {ChartDonut} from '../lib';

figma.connect(
    ChartDonut,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4739%3A69',
    {
        example: () => <ChartDonut />,
    },
);
