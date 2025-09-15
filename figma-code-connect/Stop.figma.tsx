import figma from '@figma/code-connect';

import Stop from '../lib/Stop';

figma.connect(
    Stop,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4732%3A179',
    {
        example: () => <Stop />,
    },
);
