import figma from '@figma/code-connect';

import {LogoWindows} from '../lib';

figma.connect(
    LogoWindows,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A251',
    {
        example: () => <LogoWindows />,
    },
);
