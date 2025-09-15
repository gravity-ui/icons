import figma from '@figma/code-connect';

import LayoutSideContentLeft from '../lib/LayoutSideContentLeft';

figma.connect(
    LayoutSideContentLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4720%3A109',
    {
        example: () => <LayoutSideContentLeft />,
    },
);
