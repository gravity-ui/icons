import figma from '@figma/code-connect';

import {LayoutRows} from '../lib';

figma.connect(
    LayoutRows,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5784%3A154',
    {
        example: () => <LayoutRows />,
    },
);
