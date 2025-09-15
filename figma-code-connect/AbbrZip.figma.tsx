import figma from '@figma/code-connect';

import AbbrZip from '../lib/AbbrZip';

figma.connect(
    AbbrZip,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A776',
    {
        example: () => <AbbrZip />,
    },
);
