import figma from '@figma/code-connect';

import {FolderHouse} from '../lib';

figma.connect(
    FolderHouse,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A122316',
    {
        example: () => <FolderHouse />,
    },
);
