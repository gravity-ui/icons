import figma from '@figma/code-connect';

import {Bell} from '../lib';

figma.connect(
    Bell,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1907%3A88151',
    {
        example: () => <Bell />,
    },
);
