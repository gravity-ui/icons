import figma from '@figma/code-connect';

import {Circles5Random} from '../lib';

figma.connect(
    Circles5Random,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1417',
    {
        example: () => <Circles5Random />,
    },
);
