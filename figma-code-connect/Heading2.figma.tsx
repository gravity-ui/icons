import figma from '@figma/code-connect';

import {Heading2} from '../lib';

figma.connect(
    Heading2,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1160',
    {
        example: () => <Heading2 />,
    },
);
