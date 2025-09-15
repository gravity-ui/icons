import figma from '@figma/code-connect';

import {SquarePlus} from '../lib';

figma.connect(
    SquarePlus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76514',
    {
        example: () => <SquarePlus />,
    },
);
