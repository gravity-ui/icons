import figma from '@figma/code-connect';

import {ArrowUpRightFromSquare} from '../lib';

figma.connect(
    ArrowUpRightFromSquare,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76813',
    {
        example: () => <ArrowUpRightFromSquare />,
    },
);
