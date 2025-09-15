import figma from '@figma/code-connect';

import Frames from '../lib/Frames';

figma.connect(
    Frames,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A796',
    {
        example: () => <Frames />,
    },
);
