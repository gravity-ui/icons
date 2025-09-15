import figma from '@figma/code-connect';

import Timestamps from '../lib/Timestamps';

figma.connect(
    Timestamps,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A162',
    {
        example: () => <Timestamps />,
    },
);
