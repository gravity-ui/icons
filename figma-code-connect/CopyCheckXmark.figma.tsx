import figma from '@figma/code-connect';

import {CopyCheckXmark} from '../lib';

figma.connect(
    CopyCheckXmark,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1036',
    {
        example: () => <CopyCheckXmark />,
    },
);
