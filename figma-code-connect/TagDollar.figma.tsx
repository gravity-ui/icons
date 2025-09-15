import figma from '@figma/code-connect';

import {TagDollar} from '../lib';

figma.connect(
    TagDollar,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A605',
    {
        example: () => <TagDollar />,
    },
);
