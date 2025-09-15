import figma from '@figma/code-connect';

import {LayersVertical} from '../lib';

figma.connect(
    LayersVertical,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4593%3A196',
    {
        example: () => <LayersVertical />,
    },
);
