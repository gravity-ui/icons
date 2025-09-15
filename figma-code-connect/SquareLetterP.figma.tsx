import figma from '@figma/code-connect';

import SquareLetterP from '../lib/SquareLetterP';

figma.connect(
    SquareLetterP,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11293%3A1194',
    {
        example: () => <SquareLetterP />,
    },
);
