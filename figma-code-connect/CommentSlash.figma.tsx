import figma from '@figma/code-connect';

import {CommentSlash} from '../lib';

figma.connect(
    CommentSlash,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11293%3A1268',
    {
        example: () => <CommentSlash />,
    },
);
