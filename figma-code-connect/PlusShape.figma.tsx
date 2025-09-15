import figma from '@figma/code-connect';

import {PlusShape} from '../lib';

figma.connect(
    PlusShape,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=22061%3A34',
    {
        example: () => <PlusShape />,
    },
);
