import figma from '@figma/code-connect';

import FileZipper from '../lib/FileZipper';

figma.connect(
    FileZipper,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A819',
    {
        example: () => <FileZipper />,
    },
);
