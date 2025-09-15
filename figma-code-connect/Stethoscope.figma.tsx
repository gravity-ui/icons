import figma from '@figma/code-connect';

import {Stethoscope} from '../lib';

figma.connect(
    Stethoscope,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2306%3A79262',
    {
        example: () => <Stethoscope />,
    },
);
