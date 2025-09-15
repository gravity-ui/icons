import figma from '@figma/code-connect';

import BarsAscendingAlignLeftArrowDown from '../lib/BarsAscendingAlignLeftArrowDown';

figma.connect(
    BarsAscendingAlignLeftArrowDown,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=9276%3A7',
    {
        example: () => <BarsAscendingAlignLeftArrowDown />,
    },
);
