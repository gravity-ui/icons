import figma from '@figma/code-connect';

import Tray from '../lib/Tray';

figma.connect(
    Tray,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2254%3A77253',
    {
        example: () => <Tray />,
    },
);
