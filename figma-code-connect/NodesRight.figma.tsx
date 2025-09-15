import figma from '@figma/code-connect';

import {NodesRight} from '../lib';

figma.connect(
    NodesRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4755%3A63',
    {
        example: () => <NodesRight />,
    },
);
