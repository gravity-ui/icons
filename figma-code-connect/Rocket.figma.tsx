import figma from '@figma/code-connect';

import Rocket from '../lib/Rocket';

figma.connect(
    Rocket,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A651',
    {
        example: () => <Rocket />,
    },
);
