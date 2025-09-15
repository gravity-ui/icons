import figma from '@figma/code-connect';

import ListUl from '../lib/ListUl';

figma.connect(
    ListUl,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4693%3A108',
    {
        example: () => <ListUl />,
    },
);
