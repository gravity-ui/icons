import figma from '@figma/code-connect';

import Cpu from '../lib/Cpu';

figma.connect(
    Cpu,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2297%3A91298',
    {
        example: () => <Cpu />,
    },
);
