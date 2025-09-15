import figma from '@figma/code-connect';

import {SquareLetterT} from '../lib';

figma.connect(
    SquareLetterT,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2254%3A76092',
    {
        example: () => <SquareLetterT />,
    },
);
