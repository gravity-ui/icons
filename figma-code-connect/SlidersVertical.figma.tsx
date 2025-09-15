import figma from '@figma/code-connect';

import SlidersVertical from '../lib/SlidersVertical';

figma.connect(
    SlidersVertical,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4045%3A87804',
    {
        example: () => <SlidersVertical />,
    },
);
