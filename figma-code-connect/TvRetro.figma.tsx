import figma from '@figma/code-connect';

import TvRetro from '../lib/TvRetro';

figma.connect(
    TvRetro,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A773',
    {
        example: () => <TvRetro />,
    },
);
