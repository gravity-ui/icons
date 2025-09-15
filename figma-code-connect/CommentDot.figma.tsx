import figma from '@figma/code-connect';

import {CommentDot} from '../lib';

figma.connect(
    CommentDot,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4045%3A88254',
    {
        example: () => <CommentDot />,
    },
);
