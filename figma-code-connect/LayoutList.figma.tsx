import figma from '@figma/code-connect';

import LayoutList from '../lib/LayoutList';

figma.connect(
    LayoutList,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A365',
    {
        example: () => <LayoutList />,
    },
);
