import figma from '@figma/code-connect';

import Cubes3Overlap from '../lib/Cubes3Overlap';

figma.connect(
    Cubes3Overlap,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5772%3A85',
    {
        example: () => <Cubes3Overlap />,
    },
);
