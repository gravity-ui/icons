import figma from '@figma/code-connect';

import {Sliders} from '../lib';

figma.connect(
    Sliders,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2254%3A76124',
    {
        example: () => <Sliders />,
    },
);
