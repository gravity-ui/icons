import figma from '@figma/code-connect';

import ChevronUpWide from '../lib/ChevronUpWide';

figma.connect(
    ChevronUpWide,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=8366%3A17',
    {
        example: () => <ChevronUpWide />,
    },
);
