import figma from '@figma/code-connect';

import {Square} from '../lib';

figma.connect(
    Square,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5776%3A118',
    {
        example: () => <Square />,
    },
);
