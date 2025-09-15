import figma from '@figma/code-connect';

import {ScalesBalanced} from '../lib';

figma.connect(
    ScalesBalanced,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A392',
    {
        example: () => <ScalesBalanced />,
    },
);
