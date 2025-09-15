import figma from '@figma/code-connect';

import Pill from '../lib/Pill';

figma.connect(
    Pill,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2317%3A78864',
    {
        example: () => <Pill />,
    },
);
