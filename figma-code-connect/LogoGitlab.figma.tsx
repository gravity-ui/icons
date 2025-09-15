import figma from '@figma/code-connect';

import LogoGitlab from '../lib/LogoGitlab';

figma.connect(
    LogoGitlab,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A243',
    {
        example: () => <LogoGitlab />,
    },
);
