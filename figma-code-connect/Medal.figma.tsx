import figma from '@figma/code-connect';

import {Medal} from '../lib';

figma.connect(
    Medal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A980',
    {
        example: () => <Medal />,
    },
);
