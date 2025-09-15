import figma from '@figma/code-connect';

import {ChevronsExpandFromLine} from '../lib';

figma.connect(
    ChevronsExpandFromLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A629',
    {
        example: () => <ChevronsExpandFromLine />,
    },
);
