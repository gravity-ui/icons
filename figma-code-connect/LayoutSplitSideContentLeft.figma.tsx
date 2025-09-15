import figma from '@figma/code-connect';

import {LayoutSplitSideContentLeft} from '../lib';

figma.connect(
    LayoutSplitSideContentLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9051%3A43',
    {
        example: () => <LayoutSplitSideContentLeft />,
    },
);
