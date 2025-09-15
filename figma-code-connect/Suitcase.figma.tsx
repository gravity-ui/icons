import figma from '@figma/code-connect';

import {Suitcase} from '../lib';

figma.connect(
    Suitcase,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2243%3A85185',
    {
        example: () => <Suitcase />,
    },
);
