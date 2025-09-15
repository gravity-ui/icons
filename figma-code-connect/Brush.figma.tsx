import figma from '@figma/code-connect';

import {Brush} from '../lib';

figma.connect(
    Brush,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=13142%3A192',
    {
        example: () => <Brush />,
    },
);
