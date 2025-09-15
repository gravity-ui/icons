import figma from '@figma/code-connect';

import {ChevronsCollapseFromLines} from '../lib';

figma.connect(
    ChevronsCollapseFromLines,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A643',
    {
        example: () => <ChevronsCollapseFromLines />,
    },
);
