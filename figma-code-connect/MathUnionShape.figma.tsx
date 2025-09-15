import figma from '@figma/code-connect';

import MathUnionShape from '../lib/MathUnionShape';

figma.connect(
    MathUnionShape,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A330',
    {
        example: () => <MathUnionShape />,
    },
);
