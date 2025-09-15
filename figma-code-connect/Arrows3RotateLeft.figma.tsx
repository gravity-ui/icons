import figma from '@figma/code-connect';

import Arrows3RotateLeft from '../lib/Arrows3RotateLeft';

figma.connect(
    Arrows3RotateLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2309%3A79620',
    {
        example: () => <Arrows3RotateLeft />,
    },
);
