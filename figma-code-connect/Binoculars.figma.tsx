import figma from '@figma/code-connect';

import Binoculars from '../lib/Binoculars';

figma.connect(
    Binoculars,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11294%3A133',
    {
        example: () => <Binoculars />,
    },
);
