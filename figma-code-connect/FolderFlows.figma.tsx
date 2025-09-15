import figma from '@figma/code-connect';

import {FolderFlows} from '../lib';

figma.connect(
    FolderFlows,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A122332',
    {
        example: () => <FolderFlows />,
    },
);
