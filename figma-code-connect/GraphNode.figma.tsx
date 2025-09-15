import figma from '@figma/code-connect';

import GraphNode from '../lib/GraphNode';

figma.connect(
    GraphNode,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A373',
    {
        example: () => <GraphNode />,
    },
);
