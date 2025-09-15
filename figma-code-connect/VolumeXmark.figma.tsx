import figma from '@figma/code-connect';

import VolumeXmark from '../lib/VolumeXmark';

figma.connect(
    VolumeXmark,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76616',
    {
        example: () => <VolumeXmark />,
    },
);
