import figma from '@figma/code-connect';

import CircleChevronDown from '../lib/CircleChevronDown';

figma.connect(
    CircleChevronDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5152%3A269',
    {
        example: () => <CircleChevronDown />,
    },
);
