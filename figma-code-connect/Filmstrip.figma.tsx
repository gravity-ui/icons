import figma from '@figma/code-connect';

import Filmstrip from '../lib/Filmstrip';

figma.connect(
    Filmstrip,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A998',
    {
        example: () => <Filmstrip />,
    },
);
