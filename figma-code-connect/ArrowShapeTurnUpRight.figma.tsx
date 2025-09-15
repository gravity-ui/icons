import figma from '@figma/code-connect';

import ArrowShapeTurnUpRight from '../lib/ArrowShapeTurnUpRight';

figma.connect(
    ArrowShapeTurnUpRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2246%3A75514',
    {
        example: () => <ArrowShapeTurnUpRight />,
    },
);
