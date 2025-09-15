import figma from '@figma/code-connect';

import CircleChevronsDown from '../lib/CircleChevronsDown';

figma.connect(
    CircleChevronsDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5324%3A74',
    {
        example: () => <CircleChevronsDown />,
    },
);
