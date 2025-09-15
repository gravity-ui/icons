import figma from '@figma/code-connect';

import FolderArrowUpIn from '../lib/FolderArrowUpIn';

figma.connect(
    FolderArrowUpIn,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4011%3A87806',
    {
        example: () => <FolderArrowUpIn />,
    },
);
