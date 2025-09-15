import figma from '@figma/code-connect';

import LocationArrow from '../lib/LocationArrow';

figma.connect(
    LocationArrow,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22061%3A16',
    {
        example: () => <LocationArrow />,
    },
);
