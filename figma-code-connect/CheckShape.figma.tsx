import figma from '@figma/code-connect';

import {CheckShape} from '../lib';

figma.connect(
    CheckShape,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22061%3A59',
    {
        example: () => <CheckShape />,
    },
);
