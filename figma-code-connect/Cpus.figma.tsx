import figma from '@figma/code-connect';

import {Cpus} from '../lib';

figma.connect(
    Cpus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A836',
    {
        example: () => <Cpus />,
    },
);
