import figma from '@figma/code-connect';

import {Folder} from '../lib';

figma.connect(
    Folder,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1989%3A91600',
    {
        example: () => <Folder />,
    },
);
