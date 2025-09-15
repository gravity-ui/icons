import figma from '@figma/code-connect';

import {Trolley} from '../lib';

figma.connect(
    Trolley,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2243%3A85228',
    {
        example: () => <Trolley />,
    },
);
