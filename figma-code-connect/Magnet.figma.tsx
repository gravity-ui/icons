import figma from '@figma/code-connect';

import {Magnet} from '../lib';

figma.connect(
    Magnet,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4654%3A160',
    {
        example: () => <Magnet />,
    },
);
