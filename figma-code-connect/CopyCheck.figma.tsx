import figma from '@figma/code-connect';

import {CopyCheck} from '../lib';

figma.connect(
    CopyCheck,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4687%3A63',
    {
        example: () => <CopyCheck />,
    },
);
