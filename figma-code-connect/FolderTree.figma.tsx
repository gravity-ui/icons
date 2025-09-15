import figma from '@figma/code-connect';

import {FolderTree} from '../lib';

figma.connect(
    FolderTree,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A122365',
    {
        example: () => <FolderTree />,
    },
);
