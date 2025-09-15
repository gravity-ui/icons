import figma from '@figma/code-connect';

import FolderExclamation from '../lib/FolderExclamation';

figma.connect(
    FolderExclamation,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2309%3A94857',
    {
        example: () => <FolderExclamation />,
    },
);
