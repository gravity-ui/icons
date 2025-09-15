import figma from '@figma/code-connect';

import SquareLineVertical from '../lib/SquareLineVertical';

figma.connect(
    SquareLineVertical,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22150%3A1628',
    {
        example: () => <SquareLineVertical />,
    },
);
