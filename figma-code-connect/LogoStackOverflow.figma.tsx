import figma from '@figma/code-connect';

import LogoStackOverflow from '../lib/LogoStackOverflow';

figma.connect(
    LogoStackOverflow,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A558',
    {
        example: () => <LogoStackOverflow />,
    },
);
