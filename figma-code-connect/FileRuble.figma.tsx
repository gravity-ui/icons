import figma from '@figma/code-connect';

import FileRuble from '../lib/FileRuble';

figma.connect(
    FileRuble,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9051%3A70',
    {
        example: () => <FileRuble />,
    },
);
