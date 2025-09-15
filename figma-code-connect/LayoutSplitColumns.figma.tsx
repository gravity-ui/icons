import figma from '@figma/code-connect';

import {LayoutSplitColumns} from '../lib';

figma.connect(
    LayoutSplitColumns,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9051%3A31',
    {
        example: () => <LayoutSplitColumns />,
    },
);
