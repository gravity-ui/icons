import figma from '@figma/code-connect';

import CaretsExpandVertical from '../lib/CaretsExpandVertical';

figma.connect(
    CaretsExpandVertical,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A965',
    {
        example: () => <CaretsExpandVertical />,
    },
);
