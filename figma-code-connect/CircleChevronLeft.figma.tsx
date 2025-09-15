import figma from '@figma/code-connect';

import CircleChevronLeft from '../lib/CircleChevronLeft';

figma.connect(
    CircleChevronLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5152%3A289',
    {
        example: () => <CircleChevronLeft />,
    },
);
