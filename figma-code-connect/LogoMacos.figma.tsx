import figma from '@figma/code-connect';

import LogoMacos from '../lib/LogoMacos';

figma.connect(
    LogoMacos,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A258',
    {
        example: () => <LogoMacos />,
    },
);
