import figma from '@figma/code-connect';

import LogoTelegram from '../lib/LogoTelegram';

figma.connect(
    LogoTelegram,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A216',
    {
        example: () => <LogoTelegram />,
    },
);
