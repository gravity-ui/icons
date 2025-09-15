import figma from '@figma/code-connect';

import {PinSlash} from '../lib';

figma.connect(
    PinSlash,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3861%3A87192',
    {
        example: () => <PinSlash />,
    },
);
