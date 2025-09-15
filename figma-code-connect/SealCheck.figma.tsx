import figma from '@figma/code-connect';

import {SealCheck} from '../lib';

figma.connect(
    SealCheck,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2920%3A77095',
    {
        example: () => <SealCheck />,
    },
);
