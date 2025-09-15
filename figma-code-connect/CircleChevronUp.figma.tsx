import figma from '@figma/code-connect';

import CircleChevronUp from '../lib/CircleChevronUp';

figma.connect(
    CircleChevronUp,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5152%3A259',
    {
        example: () => <CircleChevronUp />,
    },
);
