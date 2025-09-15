import figma from '@figma/code-connect';

import FileLetterX from '../lib/FileLetterX';

figma.connect(
    FileLetterX,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=13142%3A229',
    {
        example: () => <FileLetterX />,
    },
);
