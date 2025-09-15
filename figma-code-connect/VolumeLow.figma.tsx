import figma from '@figma/code-connect';

import {VolumeLow} from '../lib';

figma.connect(
    VolumeLow,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3814%3A88042',
    {
        example: () => <VolumeLow />,
    },
);
