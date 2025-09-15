import figma from '@figma/code-connect';

import {GearPlay} from '../lib';

figma.connect(
    GearPlay,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2910%3A79596',
    {
        example: () => <GearPlay />,
    },
);
