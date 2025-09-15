import figma from '@figma/code-connect';

import {Pause} from '../lib';

figma.connect(
    Pause,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4732%3A184',
    {
        example: () => <Pause />,
    },
);
