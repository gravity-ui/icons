import figma from '@figma/code-connect';

import Calculator from '../lib/Calculator';

figma.connect(
    Calculator,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1006',
    {
        example: () => <Calculator />,
    },
);
