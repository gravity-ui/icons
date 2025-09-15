import figma from '@figma/code-connect';

import {ThumbsUp} from '../lib';

figma.connect(
    ThumbsUp,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2240%3A85246',
    {
        example: () => <ThumbsUp />,
    },
);
