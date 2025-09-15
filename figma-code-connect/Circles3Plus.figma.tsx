import figma from '@figma/code-connect';

import Circles3Plus from '../lib/Circles3Plus';

figma.connect(
    Circles3Plus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A497',
    {
        example: () => <Circles3Plus />,
    },
);
