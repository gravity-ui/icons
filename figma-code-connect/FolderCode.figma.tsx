import figma from '@figma/code-connect';

import {FolderCode} from '../lib';

figma.connect(
    FolderCode,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A122028',
    {
        example: () => <FolderCode />,
    },
);
