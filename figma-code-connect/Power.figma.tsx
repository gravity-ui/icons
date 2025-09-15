import figma from '@figma/code-connect';

import {Power} from '../lib';

figma.connect(
    Power,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A460',
    {
        example: () => <Power />,
    },
);
