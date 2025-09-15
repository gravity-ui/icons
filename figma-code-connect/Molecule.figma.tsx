import figma from '@figma/code-connect';

import Molecule from '../lib/Molecule';

figma.connect(
    Molecule,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1393',
    {
        example: () => <Molecule />,
    },
);
