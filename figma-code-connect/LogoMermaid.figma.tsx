import figma from '@figma/code-connect';

import {LogoMermaid} from '../lib';

figma.connect(
    LogoMermaid,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11293%3A1217',
    {
        example: () => <LogoMermaid />,
    },
);
