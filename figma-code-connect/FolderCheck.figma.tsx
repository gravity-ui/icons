import figma from '@figma/code-connect';

import {FolderCheck} from '../lib';

figma.connect(
    FolderCheck,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11293%3A1277',
    {
        example: () => <FolderCheck />,
    },
);
