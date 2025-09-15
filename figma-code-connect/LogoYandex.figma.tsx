import figma from '@figma/code-connect';

import LogoYandex from '../lib/LogoYandex';

figma.connect(
    LogoYandex,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A203',
    {
        example: () => <LogoYandex />,
    },
);
