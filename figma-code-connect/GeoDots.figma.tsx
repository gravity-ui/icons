import figma from '@figma/code-connect';

import {GeoDots} from '../lib';

figma.connect(
    GeoDots,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2254%3A76063',
    {
        example: () => <GeoDots />,
    },
);
