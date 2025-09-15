import figma from '@figma/code-connect';

import {Sticker} from '../lib';

figma.connect(
    Sticker,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76703',
    {
        example: () => <Sticker />,
    },
);
