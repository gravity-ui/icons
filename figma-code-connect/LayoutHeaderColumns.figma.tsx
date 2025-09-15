import figma from '@figma/code-connect';

import {LayoutHeaderColumns} from '../lib';

figma.connect(
    LayoutHeaderColumns,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4656%3A180',
    {
        example: () => <LayoutHeaderColumns />,
    },
);
