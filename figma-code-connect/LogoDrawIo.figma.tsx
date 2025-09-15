import figma from '@figma/code-connect';

import LogoDrawIo from '../lib/LogoDrawIo';

figma.connect(
    LogoDrawIo,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11293%3A1225',
    {
        example: () => <LogoDrawIo />,
    },
);
