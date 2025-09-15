import figma from '@figma/code-connect';

import SquareExclamation from '../lib/SquareExclamation';

figma.connect(
    SquareExclamation,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2309%3A95113',
    {
        example: () => <SquareExclamation />,
    },
);
