import figma from '@figma/code-connect';

import {FileCode} from '../lib';

figma.connect(
    FileCode,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A713',
    {
        example: () => <FileCode />,
    },
);
