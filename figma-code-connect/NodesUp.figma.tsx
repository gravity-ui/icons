import figma from '@figma/code-connect';

import NodesUp from '../lib/NodesUp';

figma.connect(
    NodesUp,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4755%3A90',
    {
        example: () => <NodesUp />,
    },
);
