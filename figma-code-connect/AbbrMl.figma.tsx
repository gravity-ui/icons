import figma from '@figma/code-connect';

import {AbbrMl} from '../lib';

figma.connect(
    AbbrMl,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A762',
    {
        example: () => <AbbrMl />,
    },
);
