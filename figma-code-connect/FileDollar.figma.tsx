import figma from '@figma/code-connect';

import FileDollar from '../lib/FileDollar';

figma.connect(
    FileDollar,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A692',
    {
        example: () => <FileDollar />,
    },
);
