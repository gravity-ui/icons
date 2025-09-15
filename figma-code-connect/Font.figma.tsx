import figma from '@figma/code-connect';

import Font from '../lib/Font';

figma.connect(
    Font,
    'https://www.figma.com/design/QN28S6ulZ6vsq0UhwaLjsc/Gravity-UI-Icons?node-id=5561%3A295',
    {
        example: () => <Font />,
    },
);
