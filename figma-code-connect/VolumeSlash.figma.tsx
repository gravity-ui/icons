import figma from '@figma/code-connect';

import VolumeSlash from '../lib/VolumeSlash';

figma.connect(
    VolumeSlash,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22061%3A1501',
    {
        example: () => <VolumeSlash />,
    },
);
