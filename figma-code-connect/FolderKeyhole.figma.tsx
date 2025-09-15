import figma from '@figma/code-connect';

import {FolderKeyhole} from '../lib';

figma.connect(
    FolderKeyhole,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A122381',
    {
        example: () => <FolderKeyhole />,
    },
);
