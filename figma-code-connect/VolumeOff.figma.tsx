import figma from '@figma/code-connect';

import VolumeOff from '../lib/VolumeOff';

figma.connect(
    VolumeOff,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3814%3A88054',
    {
        example: () => <VolumeOff />,
    },
);
