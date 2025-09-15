import figma from '@figma/code-connect';

import Check from '../lib/Check';

figma.connect(
    Check,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2246%3A75533',
    {
        example: () => <Check />,
    },
);
