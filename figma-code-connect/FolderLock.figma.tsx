import figma from '@figma/code-connect';

import {FolderLock} from '../lib';

figma.connect(
    FolderLock,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A747',
    {
        example: () => <FolderLock />,
    },
);
