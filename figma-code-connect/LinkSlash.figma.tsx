import figma from '@figma/code-connect';

import LinkSlash from '../lib/LinkSlash';

figma.connect(
    LinkSlash,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3876%3A87088',
    {
        example: () => <LinkSlash />,
    },
);
