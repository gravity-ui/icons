import figma from '@figma/code-connect';

import {LayoutColumns} from '../lib';

figma.connect(
    LayoutColumns,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5784%3A148',
    {
        example: () => <LayoutColumns />,
    },
);
