import figma from '@figma/code-connect';

import {Italic} from '../lib';

figma.connect(
    Italic,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2238%3A85259',
    {
        example: () => <Italic />,
    },
);
