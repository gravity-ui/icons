import figma from '@figma/code-connect';

import ChartLine from '../lib/ChartLine';

figma.connect(
    ChartLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3864%3A87065',
    {
        example: () => <ChartLine />,
    },
);
