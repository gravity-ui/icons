import figma from '@figma/code-connect';

import Diamond from '../lib/Diamond';

figma.connect(
    Diamond,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4732%3A156',
    {
        example: () => <Diamond />,
    },
);
