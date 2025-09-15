import figma from '@figma/code-connect';

import {Clock} from '../lib';

figma.connect(
    Clock,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2261%3A77077',
    {
        example: () => <Clock />,
    },
);
