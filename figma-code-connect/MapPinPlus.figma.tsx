import figma from '@figma/code-connect';

import {MapPinPlus} from '../lib';

figma.connect(
    MapPinPlus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1381',
    {
        example: () => <MapPinPlus />,
    },
);
