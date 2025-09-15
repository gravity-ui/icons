import figma from '@figma/code-connect';

import {TrafficLight} from '../lib';

figma.connect(
    TrafficLight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A448',
    {
        example: () => <TrafficLight />,
    },
);
