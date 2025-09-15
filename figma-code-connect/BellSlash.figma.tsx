import figma from '@figma/code-connect';

import BellSlash from '../lib/BellSlash';

figma.connect(
    BellSlash,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9191%3A887',
    {
        example: () => <BellSlash />,
    },
);
