import figma from '@figma/code-connect';

import {FolderMagnifier} from '../lib';

figma.connect(
    FolderMagnifier,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A122397',
    {
        example: () => <FolderMagnifier />,
    },
);
