import figma from '@figma/code-connect';

import Circle from '../lib/Circle';

figma.connect(
    Circle,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5157%3A526',
    {
        example: () => <Circle />,
    },
);
