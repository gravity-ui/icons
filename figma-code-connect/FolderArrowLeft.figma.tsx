import figma from '@figma/code-connect';

import FolderArrowLeft from '../lib/FolderArrowLeft';

figma.connect(
    FolderArrowLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4011%3A87789',
    {
        example: () => <FolderArrowLeft />,
    },
);
