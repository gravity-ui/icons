import figma from '@figma/code-connect';

import ThumbsDown from '../lib/ThumbsDown';

figma.connect(
    ThumbsDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2243%3A85289',
    {
        example: () => <ThumbsDown />,
    },
);
