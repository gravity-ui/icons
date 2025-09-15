import figma from '@figma/code-connect';

import Frame from '../lib/Frame';

figma.connect(
    Frame,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4733%3A195',
    {
        example: () => <Frame />,
    },
);
