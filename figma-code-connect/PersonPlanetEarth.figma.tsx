import figma from '@figma/code-connect';

import {PersonPlanetEarth} from '../lib';

figma.connect(
    PersonPlanetEarth,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11293%3A1469',
    {
        example: () => <PersonPlanetEarth />,
    },
);
