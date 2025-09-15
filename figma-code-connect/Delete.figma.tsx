import figma from '@figma/code-connect';

import {Delete} from '../lib';

figma.connect(
    Delete,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11294%3A128',
    {
        example: () => <Delete />,
    },
);
