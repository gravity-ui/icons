import figma from '@figma/code-connect';

import {Terminal} from '../lib';

figma.connect(
    Terminal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4584%3A70',
    {
        example: () => <Terminal />,
    },
);
