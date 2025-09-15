import figma from '@figma/code-connect';

import Equal from '../lib/Equal';

figma.connect(
    Equal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=8366%3A39',
    {
        example: () => <Equal />,
    },
);
