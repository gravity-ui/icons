import figma from '@figma/code-connect';

import {ArrowDownToLine} from '../lib';

figma.connect(
    ArrowDownToLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4615%3A198',
    {
        example: () => <ArrowDownToLine />,
    },
);
