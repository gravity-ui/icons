import figma from '@figma/code-connect';

import SquareDashedText from '../lib/SquareDashedText';

figma.connect(
    SquareDashedText,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A855',
    {
        example: () => <SquareDashedText />,
    },
);
