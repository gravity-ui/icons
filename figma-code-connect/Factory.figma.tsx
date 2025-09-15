import figma from '@figma/code-connect';

import Factory from '../lib/Factory';

figma.connect(
    Factory,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4612%3A121',
    {
        example: () => <Factory />,
    },
);
