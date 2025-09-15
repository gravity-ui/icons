import figma from '@figma/code-connect';

import {FileArrowRight} from '../lib';

figma.connect(
    FileArrowRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5156%3A452',
    {
        example: () => <FileArrowRight />,
    },
);
