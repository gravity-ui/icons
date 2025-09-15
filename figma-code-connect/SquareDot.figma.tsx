import figma from '@figma/code-connect';

import SquareDot from '../lib/SquareDot';

figma.connect(
    SquareDot,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2977%3A85846',
    {
        example: () => <SquareDot />,
    },
);
