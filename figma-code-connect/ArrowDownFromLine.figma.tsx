import figma from '@figma/code-connect';

import {ArrowDownFromLine} from '../lib';

figma.connect(
    ArrowDownFromLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4615%3A216',
    {
        example: () => <ArrowDownFromLine />,
    },
);
