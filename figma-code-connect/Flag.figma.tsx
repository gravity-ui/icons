import figma from '@figma/code-connect';

import Flag from '../lib/Flag';

figma.connect(
    Flag,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4612%3A163',
    {
        example: () => <Flag />,
    },
);
