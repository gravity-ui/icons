import figma from '@figma/code-connect';

import {Sphere} from '../lib';

figma.connect(
    Sphere,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79282',
    {
        example: () => <Sphere />,
    },
);
