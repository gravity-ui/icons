import figma from '@figma/code-connect';

import ListOl from '../lib/ListOl';

figma.connect(
    ListOl,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1326',
    {
        example: () => <ListOl />,
    },
);
