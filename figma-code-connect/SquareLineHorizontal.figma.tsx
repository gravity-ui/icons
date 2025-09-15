import figma from '@figma/code-connect';

import {SquareLineHorizontal} from '../lib';

figma.connect(
    SquareLineHorizontal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22150%3A1633',
    {
        example: () => <SquareLineHorizontal />,
    },
);
