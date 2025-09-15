import figma from '@figma/code-connect';

import FileQuestion from '../lib/FileQuestion';

figma.connect(
    FileQuestion,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5156%3A448',
    {
        example: () => <FileQuestion />,
    },
);
