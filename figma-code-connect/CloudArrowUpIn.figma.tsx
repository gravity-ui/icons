import figma from '@figma/code-connect';

import {CloudArrowUpIn} from '../lib';

figma.connect(
    CloudArrowUpIn,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=3558%3A87150',
    {
        example: () => <CloudArrowUpIn />,
    },
);
