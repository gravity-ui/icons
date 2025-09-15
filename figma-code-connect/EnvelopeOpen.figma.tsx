import figma from '@figma/code-connect';

import EnvelopeOpen from '../lib/EnvelopeOpen';

figma.connect(
    EnvelopeOpen,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1218',
    {
        example: () => <EnvelopeOpen />,
    },
);
