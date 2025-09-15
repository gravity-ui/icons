import figma from '@figma/code-connect';

import {Skull} from '../lib';

figma.connect(
    Skull,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22147%3A1395',
    {
        example: () => <Skull />,
    },
);
