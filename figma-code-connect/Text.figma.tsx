import figma from '@figma/code-connect';

import {Text} from '../lib';

figma.connect(
    Text,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A814',
    {
        example: () => <Text />,
    },
);
