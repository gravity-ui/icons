import figma from '@figma/code-connect';

import {Heading4} from '../lib';

figma.connect(
    Heading4,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1176',
    {
        example: () => <Heading4 />,
    },
);
