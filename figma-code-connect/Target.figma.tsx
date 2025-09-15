import figma from '@figma/code-connect';

import {Target} from '../lib';

figma.connect(
    Target,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2922%3A76954',
    {
        example: () => <Target />,
    },
);
