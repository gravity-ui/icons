import figma from '@figma/code-connect';

import {CommentPlus} from '../lib';

figma.connect(
    CommentPlus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A706',
    {
        example: () => <CommentPlus />,
    },
);
