import figma from '@figma/code-connect';

import CopyChevronRight from '../lib/CopyChevronRight';

figma.connect(
    CopyChevronRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1143',
    {
        example: () => <CopyChevronRight />,
    },
);
