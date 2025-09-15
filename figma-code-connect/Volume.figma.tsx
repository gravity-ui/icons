import figma from '@figma/code-connect';

import Volume from '../lib/Volume';

figma.connect(
    Volume,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76601',
    {
        example: () => <Volume />,
    },
);
