import figma from '@figma/code-connect';

import {ArrowsExpand} from '../lib';

figma.connect(
    ArrowsExpand,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22148%3A1462',
    {
        example: () => <ArrowsExpand />,
    },
);
