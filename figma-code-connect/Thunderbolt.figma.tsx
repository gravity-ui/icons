import figma from '@figma/code-connect';

import Thunderbolt from '../lib/Thunderbolt';

figma.connect(
    Thunderbolt,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A120227',
    {
        example: () => <Thunderbolt />,
    },
);
