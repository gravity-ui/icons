import figma from '@figma/code-connect';

import Umbrella from '../lib/Umbrella';

figma.connect(
    Umbrella,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2307%3A78035',
    {
        example: () => <Umbrella />,
    },
);
