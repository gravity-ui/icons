import figma from '@figma/code-connect';

import Bug from '../lib/Bug';

figma.connect(
    Bug,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1907%3A88156',
    {
        example: () => <Bug />,
    },
);
