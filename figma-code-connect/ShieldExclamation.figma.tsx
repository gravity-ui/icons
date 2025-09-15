import figma from '@figma/code-connect';

import ShieldExclamation from '../lib/ShieldExclamation';

figma.connect(
    ShieldExclamation,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2242%3A85624',
    {
        example: () => <ShieldExclamation />,
    },
);
