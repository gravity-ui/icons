import figma from '@figma/code-connect';

import ArrowRightArrowLeft from '../lib/ArrowRightArrowLeft';

figma.connect(
    ArrowRightArrowLeft,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=4595%3A241',
    {
        example: () => <ArrowRightArrowLeft />,
    },
);
