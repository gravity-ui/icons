import figma from '@figma/code-connect';

import BarsUnaligned from '../lib/BarsUnaligned';

figma.connect(
    BarsUnaligned,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1236',
    {
        example: () => <BarsUnaligned />,
    },
);
