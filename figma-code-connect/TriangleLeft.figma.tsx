import figma from '@figma/code-connect';

import {TriangleLeft} from '../lib';

figma.connect(
    TriangleLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5776%3A96',
    {
        example: () => <TriangleLeft />,
    },
);
