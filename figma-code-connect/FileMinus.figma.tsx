import figma from '@figma/code-connect';

import FileMinus from '../lib/FileMinus';

figma.connect(
    FileMinus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5156%3A447',
    {
        example: () => <FileMinus />,
    },
);
