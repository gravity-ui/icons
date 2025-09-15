import figma from '@figma/code-connect';

import {Ghost} from '../lib';

figma.connect(
    Ghost,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4723%3A136',
    {
        example: () => <Ghost />,
    },
);
