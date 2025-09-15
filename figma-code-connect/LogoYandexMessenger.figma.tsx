import figma from '@figma/code-connect';

import {LogoYandexMessenger} from '../lib';

figma.connect(
    LogoYandexMessenger,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11293%3A1210',
    {
        example: () => <LogoYandexMessenger />,
    },
);
