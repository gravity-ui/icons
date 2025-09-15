import figma from '@figma/code-connect';

import {HeartPulse} from '../lib';

figma.connect(
    HeartPulse,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2307%3A78025',
    {
        example: () => <HeartPulse />,
    },
);
