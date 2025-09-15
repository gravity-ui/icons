import figma from '@figma/code-connect';

import {Aperture} from '../lib';

figma.connect(
    Aperture,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A783',
    {
        example: () => <Aperture />,
    },
);
