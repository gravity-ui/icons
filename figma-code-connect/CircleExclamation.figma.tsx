import figma from '@figma/code-connect';

import CircleExclamation from '../lib/CircleExclamation';

figma.connect(
    CircleExclamation,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=1909%3A87504',
    {
        example: () => <CircleExclamation />,
    },
);
