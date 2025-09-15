import figma from '@figma/code-connect';

import ArrowChevronUp from '../lib/ArrowChevronUp';

figma.connect(
    ArrowChevronUp,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=13288%3A12',
    {
        example: () => <ArrowChevronUp />,
    },
);
