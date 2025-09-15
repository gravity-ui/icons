import figma from '@figma/code-connect';

import {TagRuble} from '../lib';

figma.connect(
    TagRuble,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A599',
    {
        example: () => <TagRuble />,
    },
);
