import figma from '@figma/code-connect';

import LayoutSplitSideContentRight from '../lib/LayoutSplitSideContentRight';

figma.connect(
    LayoutSplitSideContentRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9051%3A49',
    {
        example: () => <LayoutSplitSideContentRight />,
    },
);
