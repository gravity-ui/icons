import figma from '@figma/code-connect';

import EnvelopeOpenXmark from '../lib/EnvelopeOpenXmark';

figma.connect(
    EnvelopeOpenXmark,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9080%3A185',
    {
        example: () => <EnvelopeOpenXmark />,
    },
);
