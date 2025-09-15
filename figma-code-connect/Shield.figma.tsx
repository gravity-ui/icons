import figma from '@figma/code-connect';

import Shield from '../lib/Shield';

figma.connect(
    Shield,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2242%3A85616',
    {
        example: () => <Shield />,
    },
);
