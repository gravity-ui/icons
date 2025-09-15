import figma from '@figma/code-connect';

import CircleNumber0 from '../lib/CircleNumber0';

figma.connect(
    CircleNumber0,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2302%3A78281',
    {
        example: () => <CircleNumber0 />,
    },
);
