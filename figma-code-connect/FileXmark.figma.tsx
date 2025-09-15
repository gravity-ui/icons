import figma from '@figma/code-connect';

import {FileXmark} from '../lib';

figma.connect(
    FileXmark,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5156%3A445',
    {
        example: () => <FileXmark />,
    },
);
