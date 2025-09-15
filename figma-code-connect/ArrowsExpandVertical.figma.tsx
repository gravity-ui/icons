import figma from '@figma/code-connect';

import ArrowsExpandVertical from '../lib/ArrowsExpandVertical';

figma.connect(
    ArrowsExpandVertical,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22148%3A1473',
    {
        example: () => <ArrowsExpandVertical />,
    },
);
