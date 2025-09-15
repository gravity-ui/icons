import figma from '@figma/code-connect';

import ChevronDown from '../lib/ChevronDown';

figma.connect(
    ChevronDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2246%3A75394',
    {
        example: () => <ChevronDown />,
    },
);
