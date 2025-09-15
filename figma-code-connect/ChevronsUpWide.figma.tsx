import figma from '@figma/code-connect';

import ChevronsUpWide from '../lib/ChevronsUpWide';

figma.connect(
    ChevronsUpWide,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=8366%3A2',
    {
        example: () => <ChevronsUpWide />,
    },
);
