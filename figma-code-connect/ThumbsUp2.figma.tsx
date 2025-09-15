import figma from '@figma/code-connect';

import {ThumbsUp2} from '../lib';

figma.connect(
    ThumbsUp2,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=7708%3A691',
    {
        example: () => <ThumbsUp2 />,
    },
);
