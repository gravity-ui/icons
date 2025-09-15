import figma from '@figma/code-connect';

import {Compass} from '../lib';

figma.connect(
    Compass,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2251%3A76758',
    {
        example: () => <Compass />,
    },
);
