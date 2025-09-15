import figma from '@figma/code-connect';

import CopyXmark from '../lib/CopyXmark';

figma.connect(
    CopyXmark,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=8730%3A704',
    {
        example: () => <CopyXmark />,
    },
);
