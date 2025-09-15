import figma from '@figma/code-connect';

import {EyeDashed} from '../lib';

figma.connect(
    EyeDashed,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=25577%3A1456',
    {
        example: () => <EyeDashed />,
    },
);
