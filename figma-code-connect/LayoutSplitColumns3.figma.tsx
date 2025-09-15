import figma from '@figma/code-connect';

import {LayoutSplitColumns3} from '../lib';

figma.connect(
    LayoutSplitColumns3,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9051%3A55',
    {
        example: () => <LayoutSplitColumns3 />,
    },
);
