import figma from '@figma/code-connect';

import FontCase from '../lib/FontCase';

figma.connect(
    FontCase,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A301',
    {
        example: () => <FontCase />,
    },
);
