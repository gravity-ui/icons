import figma from '@figma/code-connect';

import AbbrApi from '../lib/AbbrApi';

figma.connect(
    AbbrApi,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A754',
    {
        example: () => <AbbrApi />,
    },
);
