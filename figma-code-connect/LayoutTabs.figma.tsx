import figma from '@figma/code-connect';

import LayoutTabs from '../lib/LayoutTabs';

figma.connect(
    LayoutTabs,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7555%3A643',
    {
        example: () => <LayoutTabs />,
    },
);
