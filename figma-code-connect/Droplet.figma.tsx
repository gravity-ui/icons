import figma from '@figma/code-connect';

import {Droplet} from '../lib';

figma.connect(
    Droplet,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4612%3A168',
    {
        example: () => <Droplet />,
    },
);
