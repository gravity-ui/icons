import figma from '@figma/code-connect';

import {Wrench} from '../lib';

figma.connect(
    Wrench,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2317%3A78842',
    {
        example: () => <Wrench />,
    },
);
