import figma from '@figma/code-connect';

import ChartBar from '../lib/ChartBar';

figma.connect(
    ChartBar,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4739%3A113',
    {
        example: () => <ChartBar />,
    },
);
