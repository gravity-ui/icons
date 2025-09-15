import figma from '@figma/code-connect';

import {CopyMinus} from '../lib';

figma.connect(
    CopyMinus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4687%3A81',
    {
        example: () => <CopyMinus />,
    },
);
