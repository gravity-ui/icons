import figma from '@figma/code-connect';

import {ChevronUp} from '../lib';

figma.connect(
    ChevronUp,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2963%3A82938',
    {
        example: () => <ChevronUp />,
    },
);
