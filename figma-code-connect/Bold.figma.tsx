import figma from '@figma/code-connect';

import {Bold} from '../lib';

figma.connect(
    Bold,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2238%3A85247',
    {
        example: () => <Bold />,
    },
);
