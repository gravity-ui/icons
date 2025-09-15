import figma from '@figma/code-connect';

import {LogoAndroid} from '../lib';

figma.connect(
    LogoAndroid,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=20510%3A1232',
    {
        example: () => <LogoAndroid />,
    },
);
