import figma from '@figma/code-connect';

import {Bars} from '../lib';

figma.connect(
    Bars,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4586%3A122',
    {
        example: () => <Bars />,
    },
);
