import figma from '@figma/code-connect';

import {Cloud} from '../lib';

figma.connect(
    Cloud,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79339',
    {
        example: () => <Cloud />,
    },
);
