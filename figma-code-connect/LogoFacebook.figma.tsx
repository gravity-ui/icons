import figma from '@figma/code-connect';

import {LogoFacebook} from '../lib';

figma.connect(
    LogoFacebook,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A883',
    {
        example: () => <LogoFacebook />,
    },
);
