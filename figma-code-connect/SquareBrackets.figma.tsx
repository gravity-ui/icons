import figma from '@figma/code-connect';

import SquareBrackets from '../lib/SquareBrackets';

figma.connect(
    SquareBrackets,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A917',
    {
        example: () => <SquareBrackets />,
    },
);
