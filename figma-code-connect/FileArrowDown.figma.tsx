import figma from '@figma/code-connect';

import {FileArrowDown} from '../lib';

figma.connect(
    FileArrowDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5156%3A454',
    {
        example: () => <FileArrowDown />,
    },
);
