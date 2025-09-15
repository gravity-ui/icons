import figma from '@figma/code-connect';

import CircleNumber8 from '../lib/CircleNumber8';

figma.connect(
    CircleNumber8,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2302%3A78272',
    {
        example: () => <CircleNumber8 />,
    },
);
