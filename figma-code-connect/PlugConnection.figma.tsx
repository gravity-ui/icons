import figma from '@figma/code-connect';

import {PlugConnection} from '../lib';

figma.connect(
    PlugConnection,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A65',
    {
        example: () => <PlugConnection />,
    },
);
