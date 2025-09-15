import figma from '@figma/code-connect';

import CircleNumber6 from '../lib/CircleNumber6';

figma.connect(
    CircleNumber6,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2317%3A78983',
    {
        example: () => <CircleNumber6 />,
    },
);
