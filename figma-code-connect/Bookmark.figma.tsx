import figma from '@figma/code-connect';

import {Bookmark} from '../lib';

figma.connect(
    Bookmark,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2240%3A85284',
    {
        example: () => <Bookmark />,
    },
);
