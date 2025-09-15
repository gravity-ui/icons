import figma from '@figma/code-connect';

import Funnel from '../lib/Funnel';

figma.connect(
    Funnel,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79267',
    {
        example: () => <Funnel />,
    },
);
