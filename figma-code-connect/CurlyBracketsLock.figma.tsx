import figma from '@figma/code-connect';

import {CurlyBracketsLock} from '../lib';

figma.connect(
    CurlyBracketsLock,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A923',
    {
        example: () => <CurlyBracketsLock />,
    },
);
