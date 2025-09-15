import figma from '@figma/code-connect';

import {SquareArticle} from '../lib';

figma.connect(
    SquareArticle,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A318',
    {
        example: () => <SquareArticle />,
    },
);
