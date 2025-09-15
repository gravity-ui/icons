import figma from '@figma/code-connect';

import ChevronDownWide from '../lib/ChevronDownWide';

figma.connect(
    ChevronDownWide,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=8366%3A12',
    {
        example: () => <ChevronDownWide />,
    },
);
