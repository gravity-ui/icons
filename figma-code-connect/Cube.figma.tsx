import figma from '@figma/code-connect';

import {Cube} from '../lib';

figma.connect(
    Cube,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3558%3A87125',
    {
        example: () => <Cube />,
    },
);
