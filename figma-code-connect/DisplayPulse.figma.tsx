import figma from '@figma/code-connect';

import {DisplayPulse} from '../lib';

figma.connect(
    DisplayPulse,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2307%3A78030',
    {
        example: () => <DisplayPulse />,
    },
);
