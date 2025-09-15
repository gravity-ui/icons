import figma from '@figma/code-connect';

import Signal from '../lib/Signal';

figma.connect(
    Signal,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A1076',
    {
        example: () => <Signal />,
    },
);
