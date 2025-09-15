import figma from '@figma/code-connect';

import Play from '../lib/Play';

figma.connect(
    Play,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4732%3A174',
    {
        example: () => <Play />,
    },
);
