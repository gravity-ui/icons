import figma from '@figma/code-connect';

import Gpu from '../lib/Gpu';

figma.connect(
    Gpu,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=11294%3A152',
    {
        example: () => <Gpu />,
    },
);
