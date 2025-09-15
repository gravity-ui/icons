import figma from '@figma/code-connect';

import Ear from '../lib/Ear';

figma.connect(
    Ear,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1230',
    {
        example: () => <Ear />,
    },
);
