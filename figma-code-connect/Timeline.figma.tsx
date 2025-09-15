import figma from '@figma/code-connect';

import Timeline from '../lib/Timeline';

figma.connect(
    Timeline,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A355',
    {
        example: () => <Timeline />,
    },
);
