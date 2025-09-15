import figma from '@figma/code-connect';

import {FolderArrowUp} from '../lib';

figma.connect(
    FolderArrowUp,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4011%3A87784',
    {
        example: () => <FolderArrowUp />,
    },
);
