import figma from '@figma/code-connect';

import FolderArrowRight from '../lib/FolderArrowRight';

figma.connect(
    FolderArrowRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A122389',
    {
        example: () => <FolderArrowRight />,
    },
);
