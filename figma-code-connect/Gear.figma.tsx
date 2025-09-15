import figma from '@figma/code-connect';

import {Gear} from '../lib';

figma.connect(
    Gear,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1907%3A88153',
    {
        example: () => <Gear />,
    },
);
