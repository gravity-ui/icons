import figma from '@figma/code-connect';

import ListTimeline from '../lib/ListTimeline';

figma.connect(
    ListTimeline,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A344',
    {
        example: () => <ListTimeline />,
    },
);
