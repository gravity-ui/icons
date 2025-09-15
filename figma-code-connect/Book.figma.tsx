import figma from '@figma/code-connect';

import Book from '../lib/Book';

figma.connect(
    Book,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A870',
    {
        example: () => <Book />,
    },
);
