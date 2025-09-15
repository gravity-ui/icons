import figma from '@figma/code-connect';

import {Tag} from '../lib';

figma.connect(
    Tag,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A593',
    {
        example: () => <Tag />,
    },
);
