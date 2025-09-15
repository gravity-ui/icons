import figma from '@figma/code-connect';

import CaretRight from '../lib/CaretRight';

figma.connect(
    CaretRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3999%3A88350',
    {
        example: () => <CaretRight />,
    },
);
