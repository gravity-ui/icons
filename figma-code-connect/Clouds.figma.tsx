import figma from '@figma/code-connect';

import {Clouds} from '../lib';

figma.connect(
    Clouds,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A536',
    {
        example: () => <Clouds />,
    },
);
