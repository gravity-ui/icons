import figma from '@figma/code-connect';

import {Pipeline} from '../lib';

figma.connect(
    Pipeline,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11294%3A143',
    {
        example: () => <Pipeline />,
    },
);
