import figma from '@figma/code-connect';

import NodesLeft from '../lib/NodesLeft';

figma.connect(
    NodesLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4755%3A72',
    {
        example: () => <NodesLeft />,
    },
);
