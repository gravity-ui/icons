import figma from '@figma/code-connect';

import Globe from '../lib/Globe';

figma.connect(
    Globe,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76682',
    {
        example: () => <Globe />,
    },
);
