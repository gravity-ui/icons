import figma from '@figma/code-connect';

import {BroadcastSignal} from '../lib';

figma.connect(
    BroadcastSignal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1101',
    {
        example: () => <BroadcastSignal />,
    },
);
