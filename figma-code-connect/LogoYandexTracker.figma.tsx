import figma from '@figma/code-connect';

import LogoYandexTracker from '../lib/LogoYandexTracker';

figma.connect(
    LogoYandexTracker,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A960',
    {
        example: () => <LogoYandexTracker />,
    },
);
