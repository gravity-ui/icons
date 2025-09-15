import figma from '@figma/code-connect';

import {FileLetterP} from '../lib';

figma.connect(
    FileLetterP,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=13142%3A217',
    {
        example: () => <FileLetterP />,
    },
);
