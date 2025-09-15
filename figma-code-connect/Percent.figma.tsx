import figma from '@figma/code-connect';

import Percent from '../lib/Percent';

figma.connect(
    Percent,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1361',
    {
        example: () => <Percent />,
    },
);
