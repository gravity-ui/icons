import figma from '@figma/code-connect';

import {FolderArrowDown} from '../lib';

figma.connect(
    FolderArrowDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4011%3A87778',
    {
        example: () => <FolderArrowDown />,
    },
);
