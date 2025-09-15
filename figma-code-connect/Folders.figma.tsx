import figma from '@figma/code-connect';

import {Folders} from '../lib';

figma.connect(
    Folders,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A122356',
    {
        example: () => <Folders />,
    },
);
