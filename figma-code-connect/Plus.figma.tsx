import figma from '@figma/code-connect';

import {Plus} from '../lib';

figma.connect(
    Plus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1907%3A88157',
    {
        example: () => <Plus />,
    },
);
