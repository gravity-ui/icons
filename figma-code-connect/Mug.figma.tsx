import figma from '@figma/code-connect';

import Mug from '../lib/Mug';

figma.connect(
    Mug,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11293%3A1241',
    {
        example: () => <Mug />,
    },
);
