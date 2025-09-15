import figma from '@figma/code-connect';

import ExclamationShape from '../lib/ExclamationShape';

figma.connect(
    ExclamationShape,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A852',
    {
        example: () => <ExclamationShape />,
    },
);
