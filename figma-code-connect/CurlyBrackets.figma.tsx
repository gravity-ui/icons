import figma from '@figma/code-connect';

import CurlyBrackets from '../lib/CurlyBrackets';

figma.connect(
    CurlyBrackets,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=6990%3A905',
    {
        example: () => <CurlyBrackets />,
    },
);
