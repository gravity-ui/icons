import figma from '@figma/code-connect';

import {ArrowUpFromSquareSlash} from '../lib';

figma.connect(
    ArrowUpFromSquareSlash,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5568%3A64',
    {
        example: () => <ArrowUpFromSquareSlash />,
    },
);
