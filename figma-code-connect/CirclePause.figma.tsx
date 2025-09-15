import figma from '@figma/code-connect';

import CirclePause from '../lib/CirclePause';

figma.connect(
    CirclePause,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76789',
    {
        example: () => <CirclePause />,
    },
);
