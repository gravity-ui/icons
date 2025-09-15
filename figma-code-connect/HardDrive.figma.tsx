import figma from '@figma/code-connect';

import {HardDrive} from '../lib';

figma.connect(
    HardDrive,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76663',
    {
        example: () => <HardDrive />,
    },
);
