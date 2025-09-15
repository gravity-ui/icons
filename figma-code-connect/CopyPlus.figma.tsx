import figma from '@figma/code-connect';

import CopyPlus from '../lib/CopyPlus';

figma.connect(
    CopyPlus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4687%3A72',
    {
        example: () => <CopyPlus />,
    },
);
