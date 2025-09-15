import figma from '@figma/code-connect';

import CirclePlay from '../lib/CirclePlay';

figma.connect(
    CirclePlay,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2228%3A91700',
    {
        example: () => <CirclePlay />,
    },
);
