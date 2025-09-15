import figma from '@figma/code-connect';

import ChartLineLabel from '../lib/ChartLineLabel';

figma.connect(
    ChartLineLabel,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1209',
    {
        example: () => <ChartLineLabel />,
    },
);
