import figma from '@figma/code-connect';

import PersonPlus from '../lib/PersonPlus';

figma.connect(
    PersonPlus,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=2237%3A122413',
    {
        example: () => <PersonPlus />,
    },
);
