import figma from '@figma/code-connect';

import FloppyDisk from '../lib/FloppyDisk';

figma.connect(
    FloppyDisk,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4734%3A260',
    {
        example: () => <FloppyDisk />,
    },
);
