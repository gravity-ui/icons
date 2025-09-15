import figma from '@figma/code-connect';

import {TextAlignLeft} from '../lib';

figma.connect(
    TextAlignLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4045%3A88324',
    {
        example: () => <TextAlignLeft />,
    },
);
