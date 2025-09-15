import figma from '@figma/code-connect';

import GeoPolygons from '../lib/GeoPolygons';

figma.connect(
    GeoPolygons,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2254%3A76029',
    {
        example: () => <GeoPolygons />,
    },
);
