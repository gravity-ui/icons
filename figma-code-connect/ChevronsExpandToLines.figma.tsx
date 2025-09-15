import figma from '@figma/code-connect';

import {ChevronsExpandToLines} from '../lib';

figma.connect(
    ChevronsExpandToLines,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A384',
    {
        example: () => <ChevronsExpandToLines />,
    },
);
