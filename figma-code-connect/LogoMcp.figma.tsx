import figma from '@figma/code-connect';

import {LogoMcp} from '../lib';

figma.connect(
    LogoMcp,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=27293%3A16',
    {
        example: () => <LogoMcp />,
    },
);
