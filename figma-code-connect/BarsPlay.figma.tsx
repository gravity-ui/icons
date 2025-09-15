import figma from '@figma/code-connect';

import BarsPlay from '../lib/BarsPlay';

figma.connect(
    BarsPlay,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A847',
    {
        example: () => <BarsPlay />,
    },
);
