import figma from '@figma/code-connect';

import Handset from '../lib/Handset';

figma.connect(
    Handset,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A946',
    {
        example: () => <Handset />,
    },
);
