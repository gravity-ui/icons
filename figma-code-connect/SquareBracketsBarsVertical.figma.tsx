import figma from '@figma/code-connect';

import {SquareBracketsBarsVertical} from '../lib';

figma.connect(
    SquareBracketsBarsVertical,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A839',
    {
        example: () => <SquareBracketsBarsVertical />,
    },
);
