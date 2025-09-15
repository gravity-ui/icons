import figma from '@figma/code-connect';

import {Envelope} from '../lib';

figma.connect(
    Envelope,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76843',
    {
        example: () => <Envelope />,
    },
);
