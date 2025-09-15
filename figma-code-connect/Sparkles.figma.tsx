import figma from '@figma/code-connect';

import {Sparkles} from '../lib';

figma.connect(
    Sparkles,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=26288%3A1672',
    {
        example: () => <Sparkles />,
    },
);
