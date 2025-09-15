import figma from '@figma/code-connect';

import {Printer} from '../lib';

figma.connect(
    Printer,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A858',
    {
        example: () => <Printer />,
    },
);
