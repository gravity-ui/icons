import figma from '@figma/code-connect';

import {PencilToLine} from '../lib';

figma.connect(
    PencilToLine,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4654%3A147',
    {
        example: () => <PencilToLine />,
    },
);
