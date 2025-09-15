import figma from '@figma/code-connect';

import BarsAscendingAlignLeftArrowUp from '../lib/BarsAscendingAlignLeftArrowUp';

figma.connect(
    BarsAscendingAlignLeftArrowUp,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9276%3A14',
    {
        example: () => <BarsAscendingAlignLeftArrowUp />,
    },
);
