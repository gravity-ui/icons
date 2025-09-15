import figma from '@figma/code-connect';

import FileArrowLeft from '../lib/FileArrowLeft';

figma.connect(
    FileArrowLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5156%3A451',
    {
        example: () => <FileArrowLeft />,
    },
);
