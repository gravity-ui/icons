import figma from '@figma/code-connect';

import PencilToSquare from '../lib/PencilToSquare';

figma.connect(
    PencilToSquare,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76872',
    {
        example: () => <PencilToSquare />,
    },
);
