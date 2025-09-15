import figma from '@figma/code-connect';

import File from '../lib/File';

figma.connect(
    File,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A121931',
    {
        example: () => <File />,
    },
);
