import figma from '@figma/code-connect';

import {ArrowDown} from '../lib';

figma.connect(
    ArrowDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3857%3A87197',
    {
        example: () => <ArrowDown />,
    },
);
