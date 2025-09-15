import figma from '@figma/code-connect';

import CaretUp from '../lib/CaretUp';

figma.connect(
    CaretUp,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3999%3A88328',
    {
        example: () => <CaretUp />,
    },
);
