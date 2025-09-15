import figma from '@figma/code-connect';

import PlanetEarth from '../lib/PlanetEarth';

figma.connect(
    PlanetEarth,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=27986%3A1632',
    {
        example: () => <PlanetEarth />,
    },
);
