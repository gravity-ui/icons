import figma from '@figma/code-connect';

import {LogoOsi} from '../lib';

figma.connect(
    LogoOsi,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=27986%3A1594',
    {
        example: () => <LogoOsi />,
    },
);
figma.connect(
    LogoOsi,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A890',
    {
        example: () => <LogoOsi />,
    },
);
