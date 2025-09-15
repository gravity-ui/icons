import figma from '@figma/code-connect';

import FolderOpen from '../lib/FolderOpen';

figma.connect(
    FolderOpen,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4612%3A94',
    {
        example: () => <FolderOpen />,
    },
);
