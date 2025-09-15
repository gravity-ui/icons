import figma from '@figma/code-connect';

import SquareListUl from '../lib/SquareListUl';

figma.connect(
    SquareListUl,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1307',
    {
        example: () => <SquareListUl />,
    },
);
