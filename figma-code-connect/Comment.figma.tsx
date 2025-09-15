import figma from '@figma/code-connect';

import Comment from '../lib/Comment';

figma.connect(
    Comment,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2261%3A77553',
    {
        example: () => <Comment />,
    },
);
