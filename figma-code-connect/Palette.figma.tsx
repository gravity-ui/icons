import figma from '@figma/code-connect';

import Palette from '../lib/Palette';

figma.connect(
    Palette,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A757',
    {
        example: () => <Palette />,
    },
);
