import figma from '@figma/code-connect';

import {MapPinMinus} from '../lib';

figma.connect(
    MapPinMinus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1387',
    {
        example: () => <MapPinMinus />,
    },
);
