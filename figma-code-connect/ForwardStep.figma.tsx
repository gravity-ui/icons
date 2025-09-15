import figma from '@figma/code-connect';

import {ForwardStep} from '../lib';

figma.connect(
    ForwardStep,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=25891%3A1666',
    {
        example: () => <ForwardStep />,
    },
);
