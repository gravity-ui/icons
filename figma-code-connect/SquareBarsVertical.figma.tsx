import figma from '@figma/code-connect';

import {SquareBarsVertical} from '../lib';

figma.connect(
    SquareBarsVertical,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1280',
    {
        example: () => <SquareBarsVertical />,
    },
);
