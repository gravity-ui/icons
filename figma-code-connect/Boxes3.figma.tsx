import figma from '@figma/code-connect';

import {Boxes3} from '../lib';

figma.connect(
    Boxes3,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4165%3A20149',
    {
        example: () => <Boxes3 />,
    },
);
