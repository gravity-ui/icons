import figma from '@figma/code-connect';

import ChevronRight from '../lib/ChevronRight';

figma.connect(
    ChevronRight,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2963%3A82933',
    {
        example: () => <ChevronRight />,
    },
);
