import figma from '@figma/code-connect';

import CloudCheck from '../lib/CloudCheck';

figma.connect(
    CloudCheck,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A826',
    {
        example: () => <CloudCheck />,
    },
);
