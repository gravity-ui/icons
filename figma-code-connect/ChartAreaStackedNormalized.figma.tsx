import figma from '@figma/code-connect';

import {ChartAreaStackedNormalized} from '../lib';

figma.connect(
    ChartAreaStackedNormalized,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A686',
    {
        example: () => <ChartAreaStackedNormalized />,
    },
);
