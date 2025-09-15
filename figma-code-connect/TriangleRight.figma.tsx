import figma from '@figma/code-connect';

import {TriangleRight} from '../lib';

figma.connect(
    TriangleRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5776%3A105',
    {
        example: () => <TriangleRight />,
    },
);
