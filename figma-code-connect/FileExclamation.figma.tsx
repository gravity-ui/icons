import figma from '@figma/code-connect';

import {FileExclamation} from '../lib';

figma.connect(
    FileExclamation,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5156%3A449',
    {
        example: () => <FileExclamation />,
    },
);
