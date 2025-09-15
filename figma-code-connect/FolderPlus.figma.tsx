import figma from '@figma/code-connect';

import {FolderPlus} from '../lib';

figma.connect(
    FolderPlus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A122373',
    {
        example: () => <FolderPlus />,
    },
);
