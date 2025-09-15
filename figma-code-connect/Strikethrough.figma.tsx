import figma from '@figma/code-connect';

import {Strikethrough} from '../lib';

figma.connect(
    Strikethrough,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2238%3A85281',
    {
        example: () => <Strikethrough />,
    },
);
