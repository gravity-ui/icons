import figma from '@figma/code-connect';

import {GeoPin} from '../lib';

figma.connect(
    GeoPin,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2254%3A76071',
    {
        example: () => <GeoPin />,
    },
);
