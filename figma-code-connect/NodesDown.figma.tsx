import figma from '@figma/code-connect';

import {NodesDown} from '../lib';

figma.connect(
    NodesDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4755%3A81',
    {
        example: () => <NodesDown />,
    },
);
