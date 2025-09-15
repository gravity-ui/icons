import figma from '@figma/code-connect';

import OctagonXmark from '../lib/OctagonXmark';

figma.connect(
    OctagonXmark,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A552',
    {
        example: () => <OctagonXmark />,
    },
);
