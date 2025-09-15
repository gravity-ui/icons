import figma from '@figma/code-connect';

import {Magnifier} from '../lib';

figma.connect(
    Magnifier,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1907%3A88155',
    {
        example: () => <Magnifier />,
    },
);
