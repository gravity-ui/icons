import figma from '@figma/code-connect';

import Car from '../lib/Car';

figma.connect(
    Car,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9253%3A907',
    {
        example: () => <Car />,
    },
);
