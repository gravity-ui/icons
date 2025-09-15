import figma from '@figma/code-connect';

import {ListCheckLock} from '../lib';

figma.connect(
    ListCheckLock,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A948',
    {
        example: () => <ListCheckLock />,
    },
);
