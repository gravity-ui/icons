import figma from '@figma/code-connect';

import Pencil from '../lib/Pencil';

figma.connect(
    Pencil,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4654%3A154',
    {
        example: () => <Pencil />,
    },
);
