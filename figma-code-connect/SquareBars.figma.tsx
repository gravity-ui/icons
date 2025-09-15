import figma from '@figma/code-connect';

import SquareBars from '../lib/SquareBars';

figma.connect(
    SquareBars,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1288',
    {
        example: () => <SquareBars />,
    },
);
