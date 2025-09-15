import figma from '@figma/code-connect';

import {Person} from '../lib';

figma.connect(
    Person,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1909%3A87491',
    {
        example: () => <Person />,
    },
);
