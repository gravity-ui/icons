import figma from '@figma/code-connect';

import {CirclesConcentric} from '../lib';

figma.connect(
    CirclesConcentric,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A861',
    {
        example: () => <CirclesConcentric />,
    },
);
