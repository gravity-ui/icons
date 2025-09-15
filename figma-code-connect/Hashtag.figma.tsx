import figma from '@figma/code-connect';

import Hashtag from '../lib/Hashtag';

figma.connect(
    Hashtag,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4722%3A120',
    {
        example: () => <Hashtag />,
    },
);
