import figma from '@figma/code-connect';

import PersonMagnifier from '../lib/PersonMagnifier';

figma.connect(
    PersonMagnifier,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A122452',
    {
        example: () => <PersonMagnifier />,
    },
);
