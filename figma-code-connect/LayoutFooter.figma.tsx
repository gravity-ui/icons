import figma from '@figma/code-connect';

import {LayoutFooter} from '../lib';

figma.connect(
    LayoutFooter,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1121',
    {
        example: () => <LayoutFooter />,
    },
);
