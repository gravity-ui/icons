import figma from '@figma/code-connect';

import {LogoMarkdown} from '../lib';

figma.connect(
    LogoMarkdown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A986',
    {
        example: () => <LogoMarkdown />,
    },
);
